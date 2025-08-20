const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function setupDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'portfolio';

  if (!uri) {
    console.error('❌ MONGODB_URI not found in environment variables');
    return;
  }

  console.log('🚀 Setting up MongoDB database for portfolio contact form...');
  console.log('📍 Database:', dbName);

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas!');

    const db = client.db(dbName);
    const collection = db.collection('contact_submissions');

    // Create index for better performance
    await collection.createIndex({ submittedAt: -1 });
    await collection.createIndex({ email: 1 });
    await collection.createIndex({ status: 1 });
    
    console.log('📝 Created database indexes for better performance');

    // Insert sample messages to verify setup
    const sampleMessages = [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Website Development Inquiry',
        message: 'Hi Madni, I came across your portfolio and I\'m interested in discussing a potential web development project. Could we schedule a call?',
        submittedAt: new Date(),
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        status: 'new'
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah.j@company.com',
        subject: 'Collaboration Opportunity',
        message: 'Hello! I represent a startup looking for a skilled React developer. Your portfolio shows exactly what we need. Would you be interested in a freelance opportunity?',
        submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        ipAddress: '10.0.0.50',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        status: 'new'
      },
      {
        name: 'Tech Recruiter',
        email: 'recruiter@techcorp.com',
        subject: 'Full-time Position Available',
        message: 'We have a full-time React/Node.js position that matches your skill set perfectly. Great benefits and remote work options available. Interested in learning more?',
        submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        ipAddress: '172.16.0.10',
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        status: 'new'
      }
    ];

    const result = await collection.insertMany(sampleMessages);
    console.log(`✅ Inserted ${result.insertedCount} sample messages`);

    // Verify the setup
    const totalCount = await collection.countDocuments();
    console.log(`📊 Total messages in database: ${totalCount}`);

    console.log('\n🎉 Database setup complete!');
    console.log('\n📋 What was created:');
    console.log('   📂 Database: portfolio');
    console.log('   📄 Collection: contact_submissions');
    console.log('   🔍 Indexes: submittedAt, email, status');
    console.log('   📝 Sample messages: 3');

    console.log('\n🌐 You can now:');
    console.log('   1. View your database at: https://cloud.mongodb.com/');
    console.log('   2. Test the contact form at: http://localhost:3000/contact');
    console.log('   3. Check API endpoint: http://localhost:3000/api/contact');

  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
  } finally {
    await client.close();
    console.log('\n🔒 Connection closed');
  }
}

setupDatabase();