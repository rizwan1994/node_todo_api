const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/dbtest',
    (err, client) => {
        if (err) {
            return console.log('Db connection faild');
        }
        console.log('connection passe');
        const db = client.db('dbtest');

        //three deletes methods in mongodb
        //1) Delete Many

        /*  db.collection('Users').deleteMany({name: 'a'}).then((result)=>{
                  console.log(result);
              });
              */


        //2) Delete One
        /*
        db.collection('Users').deleteOne({ name: 'a' }).then((result) => {
            console.log(result);
        }); */

        //3) find one and Delete 

            db.collection('Users').findOneAndDelete({ name: 'a' }).then((result) =>{
                console.log(result);
            });

    });