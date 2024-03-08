# Create the branches:

Rename the main branch locally to prod:
```
git branch -m main prod
```

Change default branch settings:
```
git push -u origin prod
```

Delete the remote main branch on GitHub:
>[!WARNING]
> Es importante que te asegures de configurar manualmente en GitHub la rama default como la de **prod** y no la de **máin** para que este comando funcione.
```
git push origin --delete main
```

Create the **dev** and **hotfixes** branches:
```
git checkout -b dev
git checkout -b hotfixes
```

Upload the new branches to the remote repository:
```
git push origin dev
git push origin hotfixes
```

# Create a new user in MySQL

Log in to MySQL as root or as a user with privileges to create new users:
```
mysql -u root -p
```

Create the new user. Run the following command in the MySQL console:
> [!IMPORTANT]
> This command creates a new user that can connect from any host (ex. "localhost"). Change 'password' to a secure password.
```
CREATE USER 'newUser'@'%' IDENTIFIED BY 'password';
```

Grant all privileges to the new user. Run:
> [!TIP]
> You can skip this line if you do not want to apply privileges to your new user.
```
GRANT ALL PRIVILEGES ON *.* TO 'newUser'@'%' WITH GRANT OPTION;
```

Apply the changes. Run:
```
FLUSH PRIVILEGES;
```

# Create the database

Create database fullstack_form if it does not exist:
```
CREATE DATABASE IF NOT EXISTS fullstack_form;
```

Use fullstack_form database:
```
USE fullstack_form;
```

Create the APPLICATIONS table:
```
CREATE TABLE APPLICATIONS (
    id VARCHAR(8) PRIMARY KEY,
    name TEXT NOT NULL,
    phoneNumber VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    profilePicture VARCHAR(255)
);
```

To avoid having a boring autoincremental id of 1, 2, 3... Let's create a more interesting one with a TRIGGER:
```
DELIMITER //

CREATE TRIGGER generate_id 
BEFORE INSERT ON APPLICATIONS 
FOR EACH ROW
BEGIN
    DECLARE next_id VARCHAR(8);
    DECLARE prefix_letters CHAR(3);
    DECLARE random_number INT;
    DECLARE next_sequence INT;

    -- Generate two random numbers
    SET random_number = FLOOR(RAND() * 100);

    -- Generate three random letters (uppercase)
    SET prefix_letters = CONCAT(CHAR(FLOOR(65 + RAND() * 26)), CHAR(FLOOR(65 + RAND() * 26)), CHAR(FLOOR(65 + RAND() * 26)));

    -- Get next sequence number
    SET @last_id = (SELECT id FROM APPLICATIONS ORDER BY id DESC LIMIT 1);
    IF @last_id IS NULL THEN
        SET next_sequence = 1;
    ELSE
        SET next_sequence = CAST(SUBSTRING(@last_id, 7) AS UNSIGNED) + 1;
    END IF;

    -- Form the complete ID
    SET next_id = CONCAT(LPAD(random_number, 2, '0'), prefix_letters, LPAD(next_sequence, 3, '0'));

    SET NEW.id = next_id;
END;
//

DELIMITER ;
```

> [!WARNING]
> If for some reason you already have a trigger created, it may cause a conflict, you can delete the one you have with the following command and then try to create the trigger again.

```
DROP TRIGGER IF EXISTS generate_id;
```

Finally, let's do a test to put the data into our table:
```
INSERT INTO APPLICATIONS (name, phoneNumber, email, message, profilePicture) 
VALUES 
    ('Juan Perez', '1234567890', 'juan@example.com', 'Test message 1', '/path/to/picture1.jpg'),
    ('María García', '9876543210', 'maria@example.com', 'Test message 2', '/path/to/picture2.jpg');
```

Show new data:
```
SELECT * FROM APPLICATIONS;
```

