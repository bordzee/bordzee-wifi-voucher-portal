const sdk = require('node-appwrite');

module.exports = async function (req, res) {
    const client = new sdk.Client();

    // Set up Appwrite client
    client
        .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your Appwrite endpoint
        .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
        .setKey(process.env.APPWRITE_API_KEY); // Your API key

    const database = new sdk.Database(client);

    // Get the voucher code from the request
    const voucherCode = req.body.voucher_code;

    try {
        const vouchers = await database.listDocuments('YOUR_DATABASE_ID', 'YOUR_COLLECTION_ID', [
            sdk.Query.equal('code', voucherCode),
        ]);

        if (vouchers.documents.length > 0 && vouchers.documents[0].valid) {
            res.json({ success: true, redirectUrl: 'https://success-page-url' });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};
