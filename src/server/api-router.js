const express = require('express');
const ObjectID = require('mongodb').ObjectID;

function apiRouter(database) {
     const router = express.Router();
     
    router.get('/products', (req, res) => {
        console.log(database);
     console.log(database.collection('products'));
        database.collection('products').find({})
            .toArray((err, results) => {
                console.log(results);
                if (err) {
                    throw err;
                }
                else {
                    return res.json(results);
                }

            });
    });


    router.put('/products', (req, res) => {
        const products = req.body;
        const productsCollection = database.collection('products');
        const data = products['body'];
        for (var i = 0; i < data.length; i++) {
            productsCollection.updateOne({ "_id": ObjectID(data[i]['_id']) },
                { $set: { "orderQuantity": data[i]['orderQuantity'] } }, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                        return;
                    }
                    else {
                        res.status(200).send("Record Updated");
                        return;

                    }
                })
        }


    });
    return router;
}

module.exports = apiRouter;