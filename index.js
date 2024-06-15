const sdk = require('node-appwrite');

// Init SDK
let client = new sdk.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

let databases = new sdk.Databases(client);

module.exports = async function (req, res) {
    // Your function logic here

    // Example: Fetch a document from a collection
    try {
        let result = await databases.getDocument('collectionId', 'documentId');
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
