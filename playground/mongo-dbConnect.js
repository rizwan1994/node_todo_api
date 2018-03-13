const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/dbtest',
(err,client) => {
    if(err){
        return console.log("Unable To Connect Data base");
    }
    const db=client.db('dbtest')
    console.log("Connection to mongo databse is successfull");

    db.collection('Tabel_1').insertOne({
        name: 'Master Rizwan',
        address: 'ksb',
        age: '23'
    },
(err,result)=>{
            if(err){
                return console.log("Error while inserting a data", err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2 ));
        });
    
    client.close();

});    


