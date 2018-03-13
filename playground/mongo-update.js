const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/dbtest',
    (err, client) => {
        if (err) {
            return console.log("Error in db connection");
        }
        console.log('gb Connection success....');

        const db = client.db('dbtest');

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5aa620f1163736eddd5b5566')
        },
            {
                $set: {
                    name: 'mr',
                },
                $inc: {
                    age: -24
                },
            },
                {
                    returnOriginal: false
                }).then((result)=>
            {
                console.log(result);
            });


    });