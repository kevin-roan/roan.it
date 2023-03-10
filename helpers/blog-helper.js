var db = require("../config/connection");
var collection = require("../config/collection");
var objectId = require("mongodb").ObjectId;

module.exports = {
  addBlog: (blog, callback) => {
    db.get()
      .collection("product")
      .insertOne(product)
      .then((data) => {
        callback(data.insertedId);
      });
  },
  getAllBlog: () => {
    return new Promise(async (resolve, reject) => {
      let products = await db
        .get()
        .collection(collection.BLOG_COLLECTION)
        .find()
        .toArray();
      resolve(blogs);
    });
  },
};
