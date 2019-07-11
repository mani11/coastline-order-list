const MongoClient = require('mongodb').MongoClient;
const createExpressApp = require('./create-express-app');

require('dotenv').config();
// let database;
MongoClient.connect(process.env.DB_CONN, (err, client) => {
    if (err) {
        throw err;
    }
    else {
        console.log("connection successfull");
        database = client.db('interview-db');
        console.log("Database is "+ database.collection('products').find({}));
        createExpressApp(database).listen(3000, () => {
            
            console.log("listening on port 3000");
        });
    }
});

