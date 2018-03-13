// //const  MongoClient = require('mongodb').MongoClient;

// const { MongoClient, ObjectID  } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/dbtest',
// (err,client) => {
//     if(err){
//     return console.log('Data Base Connection faild');
//     }
//     console.log('Database connected..');
//     const db = client.db('dbtest');

//  db.collection('Tabel_1').find(
//      { _id: new ObjectID('5aa271be41d358632fdd741e')}
//     ).toArray().then((docs) =>{
//     console.log('Tables');
//     console.log(JSON.stringify(docs, undefined, 2));
//  },(err) =>{
//      console.log('Error', err);
// });


// //close Data base connection 
// });




//

const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/dbtest', 
(err,client) =>{
    if(err){
        return console.log('DB not Connected..');
    }
    console.log('Connection successed..');

    
    const db = client.db('dbtest');


    db.collection('Users').find({name:'a'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 3));

    },(err)=>{
        console.log('Error Occured in query section', err);
    }
);

});
