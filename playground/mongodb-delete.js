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


  //deleteMany
  // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result)=>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
  //   console.log(result);
  // })

  //training
  // db.collection('Users').deleteMany({name: "Tonya"});

  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5aece1b8d46f3f57598f9269')}).then( (result) => {
  //   console.log(JSON.stringify(result, undefined, 2) );
  // })

  client.close();
})
