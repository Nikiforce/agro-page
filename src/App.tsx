

import SOCIALS from './socials';
import './App.css';
import logo from './assets/Logo_color_1.jpg';

function App() {
  return (
    <div className="landing-root">
      <div className="landing-content">
        <img
          src={logo}
          alt="агротехавиа logo"
          className="company-logo"
        />
        <div className="social-row">
          {SOCIALS.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label={name}
            >
              <span className="social-icon-circle">
                <Icon className="social-icon-svg" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
