

// src/index.js (or main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './pages/Landing'; // Or your Landing component

const container = document.getElementById('root'); // <--- This must find the div in HTML!

// Check if container exists before creating the root
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Landing /> {/* Or <Landing /> */}
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element in the DOM.");
}