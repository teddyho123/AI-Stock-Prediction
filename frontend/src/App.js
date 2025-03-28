import React, { useState } from 'react';

function App() {
  const [ticker, setTicker] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const handlePredict = async () => {
    const res = await fetch(`http://127.0.0.1:8000/predict?ticker=${ticker}`);
    const blob = await res.blob();
    const imgURL = URL.createObjectURL(blob);
    setImageUrl(imgURL);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📈 Stock Price Predictor</h1>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value.toUpperCase())}
        placeholder="Enter stock ticker (e.g. AAPL)"
      />
      <button onClick={handlePredict}>Predict</button>
      {imageUrl && <img src={imageUrl} alt="Prediction Graph" style={{ marginTop: '2rem', maxWidth: '100%' }} />}
    </div>
  );
}

export default App;
