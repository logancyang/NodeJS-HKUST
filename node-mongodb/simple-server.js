var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
// Use connect method to connect to the Server, with callback func
MongoClient.connect(url, function (err, db){
  assert.equal(err, null);
  console.log("Connected to the server");

  var collection = db.collection("dishes");
  // Insert doc into db
  collection.insertOne({name: "Uthapizza", description: "test"},
    // Supply callback func for later available result
    function (err, result) {
      assert.equal(err, null);
      console.log("After insert:");
      console.log(result.ops);
      // Supply callback func for later available result
      collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found:");
        console.log(docs);

        db.dropCollection("dishes", function (err, result) {
          assert.equal(err, null);
          db.close();
        });
      });
    });
});