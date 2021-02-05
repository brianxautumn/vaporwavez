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
          <div className="links">
            <a target="blank" href="https://open.spotify.com/artist/67AOfL6Oi8UZqpuGlw0mT3">Spotify</a>
            <a target="blank" href="https://music.apple.com/us/artist/vaporwavez/1546276377">Apple Music</a>
            <a target="blank" href="https://www.deezer.com/us/artist/117558422">Deezer</a>
            <a target="blank" href="https://www.instagram.com/vaporwavez_music/">Instagram</a>
            <a target="blank" href="https://twitter.com/vaporwavezmusic">Twitter</a>
            <a target="blank" href="https://discord.gg/fF9zkuhP">Discord</a>
            <div>
              aesthetic [at] vaporwave.com
            </div>
            <div className="playlist-wrapper">
              <iframe
                src="https://open.spotify.com/embed/playlist/0HkJUicjusLn8P7BdS2P4N"
                width="100%"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
