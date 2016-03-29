var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var dboper = require('./operations');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  // db, document, collection, callback func
  dboper.insertDocument(db, { name: "Vadonut", description: "Test" },
    "dishes", function (result) {
    console.log(result.ops);

    // db, collection, callback func
    dboper.findDocuments(db, "dishes", function (docs) {
      console.log(docs);
    // db, document key, document update, collection, callback func
    dboper.updateDocument(db, { name: "Vadonut" },
      { description: "Updated Test" }, "dishes", function (result) {
        console.log(result.result);

        dboper.findDocuments(db, "dishes", function (docs) {
          console.log(docs);

          db.dropCollection("dishes", function (result) {
            console.log(result);
            db.close();
          });   
        });
      });
    });
  });
});