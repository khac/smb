import { MongoClient } from "mongodb";

// const { MongoClient} = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const password = "SvNjvMHcoeOteBP4";
const uri = `mongodb+srv://algo_workshop:${password}@cluster0.fwk7nbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run(location, query) {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("seachInsertDB");
    const haiku = database.collection("allSearch");
    
    // Create a document to insert
    const doc = {
      title: location,
      content: query,
    }
    // Insert the defined document into the "haiku" collection
    const result = await haiku.insertOne(doc);

    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
// run().catch(console.dir);

export default run;