# GETTING STARTED

Dependencies you will need 📦
>[!TIP]
> In fact, you can always check the 🗃️ **package.json** file to check the dependencies and the version used.
```
pnpm install express mysql knex body-parser dotenv cors multer
```

The structure of your DB conncection 🔒 (.env file):
```
DB_HOST=your_host
DB_PORT=your_port
DB_NAME=the_db_name
DB_USER=your_user
DB_PSWD=your_password
```

Once you have the project ready, 🚀 just run your Back-End server locally with the following command:
```
node app.js
```

# Back-End tetsing

Create a JSON object to test in ThunderClient or PostMan **(POST)**:
```
{
  "name": "John Doe",
  "phoneNumber": "555-1234",
  "email": "john.doe@example.com",
  "message": "Hello, I'm interested in applying for the position.",
  "profilePicture": "/path/to/picture3.jpg"
}
```
