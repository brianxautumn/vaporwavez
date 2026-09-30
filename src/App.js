import React from 'react';
import logo from './logo.svg';
import './App.css';

import Background from './Background';

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header" >
        <div className="app-wrapper">
          <h1>
            Vaporwavez
          </h1>
          <p>Vaporwave producer</p>
          <nav className="links" aria-label="Vaporwavez on social and streaming platforms">
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/67AOfL6Oi8UZqpuGlw0mT3" aria-label="Spotify (opens in a new tab)">Spotify</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/artist/vaporwavez/1546276377" aria-label="Apple Music (opens in a new tab)">Apple Music</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.deezer.com/us/artist/117558422" aria-label="Deezer (opens in a new tab)">Deezer</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vaporwavez_music/" aria-label="Instagram (opens in a new tab)">Instagram</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
