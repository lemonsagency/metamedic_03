import React from 'react';
import LandingPage from './components/LandingPage';
import FacebookPixel from './components/FacebookPixel';

function App() {
  return (
    <div className="App">
      <FacebookPixel pixelId="123456789" />
      <LandingPage />
    </div>
  );
}

export default App;