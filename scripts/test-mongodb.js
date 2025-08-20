const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

// MongoDB client options with stable API version
const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
};

async function testMongoDBConnection() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'portfolio';

  if (!uri) {
    console.error('❌ MONGODB_URI not found in environment variables');
    return;
  }

  console.log('🔄 Connecting to MongoDB...');
  console.log('📍 Database:', dbName);

  const client = new MongoClient(uri, clientOptions);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');

    // Select database
    const db = client.db(dbName);
    console.log(`📂 Using database: ${dbName}`);

    // Create collection if it doesn't exist and insert a test document
    const collection = db.collection('contact_submissions');
    
    // Insert a test message
    const testMessage = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Database Test',
      message: 'This is a test message to verify the MongoDB connection is working properly.',
      submittedAt: new Date(),
      ipAddress: '127.0.0.1',
      userAgent: 'Test Script',
      status: 'test'
    };

    const result = await collection.insertOne(testMessage);
    console.log('✅ Test message inserted successfully!');
    console.log('📝 Document ID:', result.insertedId);

    // Count documents in collection
    const count = await collection.countDocuments();
    console.log(`📊 Total documents in collection: ${count}`);

    // List all documents
    const documents = await collection.find({}).toArray();
    console.log('📋 All messages in database:');
    documents.forEach((doc, index) => {
      console.log(`\n--- Message ${index + 1} ---`);
      console.log(`Name: ${doc.name}`);
      console.log(`Email: ${doc.email}`);
      console.log(`Subject: ${doc.subject}`);
      console.log(`Message: ${doc.message}`);
      console.log(`Submitted: ${doc.submittedAt}`);
      console.log(`Status: ${doc.status}`);
    });

  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
  } finally {
    await client.close();
    console.log('\n🔒 Connection closed');
  }
}

// Run the test
testMongoDBConnection();