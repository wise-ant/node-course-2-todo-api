//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
//console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("Unable to connect to mongo database")
  }
  console.log("Connected to Mongo DataBase")
  const db =client.db('TodoApp')

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aee0748d164fbd46291c8e9')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // })

  db. collection('Users').findOneAndUpdate({
    _id: new ObjectID("5aecdb6613443e56bc0817ec")
  }, {
    $set: {
      name: "Tonya"
    },
    $inc: {
      age: -1
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result)
  });

  client.close();
})
