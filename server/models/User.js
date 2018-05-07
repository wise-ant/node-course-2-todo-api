const mongoose = require('mongoose');

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

module.exports = { User };

// var newUser = new User({});
//
// newUser.save().then((doc)=>{
//   console.log('doc')
// }, (e) => {
//   console.log('Unable to save user', e);
// })
