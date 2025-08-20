"use client";

import { useState } from 'react';

export default function TestContactAPI() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          subject: 'API Test',
          message: 'This is a test message to verify the API works'
        }),
      });

      const data = await response.json();
      setResult({
        status: response.status,
        ok: response.ok,
        data: data
      });
      
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact API Test Page</h1>
      
      <button 
        onClick={testAPI} 
        disabled={loading}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test Contact API'}
      </button>

      {result && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          fontFamily: 'monospace'
        }}>
          <h3>API Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Click the "Test Contact API" button above</li>
          <li>Check if the API returns success</li>
          <li>Check your MongoDB database for the test message</li>
          <li>Check the browser console and server logs for any errors</li>
        </ol>
      </div>
    </div>
  );
}