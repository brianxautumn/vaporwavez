import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [letterIndex, setLetterIndex] = React.useState(0);
  const [deg, setDeg] = React.useState(40);

  const timer = React.useRef(null);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setLetterIndex((letterIndex + 1) % 'vaporwavez'.length);
      setDeg((deg + 5) % 360);
    }, 1000);
    return () => clearInterval(timer.current);
  }, [letterIndex, deg]);

  const makeTitle = () => {
    return 'vaporwavez'.split('').map((letter, i) =>
      <span key={i} style={{ fontWeight: i === letterIndex ? 'bolder' : null }}>{letter}</span>
    );
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          background: `linear-gradient(${deg}deg, rgba(198,116,232,1) 45%, rgba(0,212,255,1) 100%)`,
        }}
      >
        <div className="app-wrapper">
          <h1>
            {makeTitle()}
          </h1>
          <div className="links">
            <a target="blank" href="https://open.spotify.com/artist/67AOfL6Oi8UZqpuGlw0mT3">Spotify</a>
            <a target="blank" href="https://music.apple.com/us/artist/vaporwavez/1546276377">Apple Music</a>
            <a target="blank" href="https://www.instagram.com/vaporwavez_music/">Instagram</a>
            <a target="blank" href="https://twitter.com/vaporwavezmusic">Twitter</a>
            <a target="blank" href="https://discord.gg/fF9zkuhP">Discord</a>
            <div>
              aesthetic [at] vaporwave.com
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
