// Test the contact API endpoint
async function testContactAPI() {
  const testMessage = {
    name: 'API Test User',
    email: 'apitest@example.com',
    subject: 'Testing Contact Form API',
    message: 'This is a test message sent directly to the API to verify it works properly.'
  };

  console.log('🔄 Testing Contact API...');
  console.log('📝 Sending test message:', testMessage);

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMessage),
    });

    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));

    const responseData = await response.json();
    console.log('📋 Response data:', responseData);

    if (response.ok) {
      console.log('✅ API test successful!');
      console.log('📝 Message ID:', responseData.id);
    } else {
      console.log('❌ API test failed');
      console.log('❌ Error:', responseData.error || responseData.message);
    }

  } catch (error) {
    console.error('❌ Network error:', error.message);
    console.log('\n💡 Make sure your Next.js app is running with: npm run dev');
  }
}

// Check if we have required modules
try {
  // Use dynamic import for fetch in Node.js environment
  if (typeof fetch === 'undefined') {
    // For Node.js < 18, we need to use node-fetch
    console.log('⚠️  This script requires Node.js 18+ or you need to install node-fetch');
    console.log('💡 Try running this test in your browser console instead:');
    console.log(`
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'API Test User',
        email: 'apitest@example.com', 
        subject: 'Testing Contact Form API',
        message: 'This is a test message sent directly to the API.'
      })
    }).then(res => res.json()).then(data => console.log(data));
    `);
  } else {
    testContactAPI();
  }
} catch (error) {
  console.error('Script error:', error.message);
}