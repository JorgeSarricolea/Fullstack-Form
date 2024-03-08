# Front-End

## For Astro:
```
pnpm create astro@latest
```

For TailwindCSS
```
npx astro add tailwind
pnpm astro add @astro/tailwind
pnpm astro add tailwindcss
```

# Back-End

Commands to initialize in our server folder:
```
pnpm install express mysql knex body-parser dotenv
```

# Database

## Log in to MySQL as root or as a user with privileges to create new users:
```
mysql -u root -p
```

## Create the new user. Run the following command in the MySQL console:
```
CREATE USER 'newUser'@'%' IDENTIFIED BY 'password';
```
> [!IMPORTANT]
> This command creates a new user that can connect from any host (ex. "localhost"). Change 'password' to a secure password.

## Grant all privileges to the new user. Run:
```
GRANT ALL PRIVILEGES ON *.* TO 'nuevoUsuario'@'%' WITH GRANT OPTION;
```
> [!TIP]
> You can skip this line if you do not want to apply privileges to your new user.

## Apply the changes. Run:
```
FLUSH PRIVILEGES;
```
