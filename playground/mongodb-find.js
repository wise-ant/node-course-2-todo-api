//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("Unable to connect to mongo database")
  }
  console.log("Connection to Mongo DataBase")
  const db =client.db('TodoApp')
  // // db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
  // db.collection('Todos').find({_id: new ObjectID('5aeced12d164fbd46291a5b9')}).toArray().then((docs) =>{
  //
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'Tonya'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Unable to fetch users');
  })
  db.collection('Users').find({name: 'Tonya'}).count().then((count) => {
    console.log(`Users count ${count}`);
  })

  client.close();
})
