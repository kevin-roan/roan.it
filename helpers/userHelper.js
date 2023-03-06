var db =require("../config/connection");
var collection = require("../config/colletion");
var bcrypt = require("bcrypt");
var objectId = require("mongodb").objectId;

module.exports = {
  doSignup:(userData)async (resolve,reject)=>{
    userData.password = await bcrypt.hash(userData.password,10);
    db.get().collection(collection.USER_COLLECTION)
    .insertOne(userData)
    .then((data)=>{
        resolve(data.insertedId);
      })
  });
}, 
doLogin:(userData)=>{
  return new Promise(async(resolve,reject)=>{
  let loginStatus = false;
  let response = {};
  let user = await db
  .get()
  .collection(collection.USER_COLLECTION)
  .findOne({Email:userData.Email});

  if(user){
  bcrypt.compare(userData.password,user.Password).then((status)=>{
   if(status){
   console.log("Login Success")
   response.user = user;
   response.status = true;
   resolve(response);
   }else{
   console.log("Login Failed")
   resolve({ status:false});
   }
  })
  }else{
  console.log("Login Failed");
  resolve({ status:false});
  }
  })
}

