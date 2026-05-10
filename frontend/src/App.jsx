import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const manifestRecognition = async () => {
    setLoading(true);
    try {
      // Pointing to your active Backend on Port 5000
      // Change the email to something new
const res = await axios.post('http://localhost:5000/api/geniuses/recognize', {
    name: "Xavier Engineer",
    email: "xavier.v2@oll.tech" // New email = New entry
});
      setResponse(res.data);
    } catch (err) {
      console.error("The Handshake Failed:", err);
      alert("Check if Backend is running on Port 5000!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#fff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Roboto' 
    }}>
      <h1 style={{ letterSpacing: '5px', borderBottom: '2px solid #00ff00', paddingBottom: '10px' }}>
        STRICT EQUALITY ENGINE
      </h1>
      
      <button 
        onClick={manifestRecognition}
        disabled={loading}
        style={{ 
          marginTop: '30px',
          padding: '15px 40px', 
          fontSize: '18px', 
          fontWeight: 'bold',
          cursor: 'pointer', 
          backgroundColor: loading ? '#333' : '#00ff00', 
          color: '#000', 
          border: 'none', 
          borderRadius: '50px',
          transition: '0.3s'
        }}
      >
        {loading ? "COMMUNICATING WITH AL-AMIN..." : "MANIFEST RECOGNITION"}
      </button>

      {response && (
        <div style={{ 
          marginTop: '40px', 
          padding: '30px', 
          border: '2px solid #00ff00', 
          borderRadius: '15px',
          textAlign: 'left',
          backgroundColor: '#111',
          boxShadow: '0 0 20px #00ff0033'
        }}>
          <h2 style={{ color: '#00ff00', margin: '0 0 10px 0' }}>{response.status}</h2>
          <hr style={{ borderColor: '#333' }} />
          <p><strong>OFFICIAL IDENTITY:</strong> {response.data.name}</p>
          <p><strong>SYSTEM STATUS:</strong> {response.data.status}</p>
          <p><strong>ATROPHY LEVEL:</strong> {response.data.atrophyLevel}%</p>
          <p style={{ fontSize: '12px', color: '#666' }}><strong>ID:</strong> {response.data._id}</p>
        </div>
      )}
    </div>
  );
}

export default App;