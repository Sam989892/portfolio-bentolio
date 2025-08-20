import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Configure route for dynamic API
export const dynamic = 'force-dynamic';

// MongoDB connection string - you'll need to add this to your environment variables
const MONGODB_URI = process.env.MONGODB_URI || '';
const MONGODB_DB = process.env.MONGODB_DB || 'portfolio';

// MongoDB client options with stable API version
const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  console.log('🔄 Contact API called');
  
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();
    console.log('📝 Form data received:', { ...body, message: body.message.substring(0, 50) + '...' });
    
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('❌ Validation failed: Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check MongoDB connection
    console.log('🔍 Checking MongoDB connection...');
    console.log('📍 MONGODB_URI exists:', !!MONGODB_URI);
    console.log('📍 MONGODB_DB:', MONGODB_DB);
    
    if (!MONGODB_URI) {
      console.error('❌ MONGODB_URI is not defined in environment variables');
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      );
    }

    const client = new MongoClient(MONGODB_URI, clientOptions);
    
    try {
      console.log('🔌 Connecting to MongoDB...');
      await client.connect();
      console.log('✅ Connected to MongoDB successfully');
      
      const db = client.db(MONGODB_DB);
      const collection = db.collection('contact_submissions');

      // Create the document to insert
      const contactSubmission = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        submittedAt: new Date(),
        ipAddress: request.ip || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
        status: 'new'
      };

      console.log('💾 Inserting document...');
      const result = await collection.insertOne(contactSubmission);
      console.log('✅ Contact form submission saved with ID:', result.insertedId);

      return NextResponse.json(
        { 
          success: true,
          message: 'Contact form submitted successfully',
          id: result.insertedId 
        },
        { status: 200 }
      );

    } finally {
      await client.close();
      console.log('🔒 MongoDB connection closed');
    }

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to process your message. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to retrieve messages (for admin panel)
export async function GET(request: NextRequest) {
  try {
    // You might want to add authentication here before allowing access to messages
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = parseInt(searchParams.get('skip') || '0');

    if (!MONGODB_URI) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      );
    }

    const client = new MongoClient(MONGODB_URI, clientOptions);
    
    try {
      await client.connect();
      const db = client.db(MONGODB_DB);
      const collection = db.collection('contact_submissions');

      const messages = await collection
        .find({})
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray();

      const total = await collection.countDocuments();

      return NextResponse.json({
        messages,
        total,
        page: Math.floor(skip / limit) + 1,
        totalPages: Math.ceil(total / limit)
      });

    } finally {
      await client.close();
    }

  } catch (error) {
    console.error('Error retrieving contact messages:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve messages' },
      { status: 500 }
    );
  }
}