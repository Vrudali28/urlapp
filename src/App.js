import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const shortenUrl = async () => {
    try {
      const response = await axios.post(
        "https://server-url-shortner.onrender.com/api/shorten", // Update this URL
        {
          originalUrl,
        }
      );
      setShortenedUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <div className="input-group">
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter URL to shorten"
        />
        <button onClick={shortenUrl}>Shorten URL</button>
      </div>
      {shortenedUrl && (
        <div className="result">
          Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a>
        </div>
      )}
    </div>
  );
}

export default App;
