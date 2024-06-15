const { Client, Functions } = require('node-appwrite');

// Init SDK
let client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('666de56d00361079f322') // Your project ID
    .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

let functions = new Functions(client);

functions.createExecution('666deb45001a4115445e')
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
