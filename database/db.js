const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    // perform actions on the collection object
    console.log("Connected to the MongoDB server");

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

//This code connects to a MongoDB server running on localhost on port 27017 and uses a database named myproject.
// Remember to replace the url and dbName values with your actual MongoDB server URL and database name.
// not expose your user and pass
