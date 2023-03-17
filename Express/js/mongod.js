const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27018/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  const collection = db.collection("mammals");

  // insert some sample data
  collection.insertOne({
    name: "lion",
    category: "mammal",
    location: "Africa"
  }, (err, result) => {
    if (err) throw err;
    console.log(result.ops); // should output the inserted document
    client.close();
  });
});
