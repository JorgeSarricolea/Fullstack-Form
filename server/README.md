# GETTING STARTED

Dependencies you will need 📦
>[!TIP]
> In fact, you can always check the 🗃️ **package.json** file to check the dependencies and the version used.
```
pnpm install express mysql knex body-parser dotenv cors multer nodemon
```
>[!IMPORTANT]
> Remember to configure your **package.json** file for nodemon to work.
```
"scripts": {
  "start": "node ./src/app.js",
  "dev": "nodemon ./src/app.js"
}
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
pnpm run dev```

# Back-End tetsing

Create a JSON object to test in ThunderClient or PostMan **(POST)**:
```
{
  "name": "John Doe",
  "phoneNumber": "5551234999",
  "email": "john.doe@example.com",
  "message": "Hello, I'm interested in applying for the position.",
  "profilePicture": "/path/to/picture3.jpg"
}
```
