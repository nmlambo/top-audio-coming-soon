import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';
import { ReactComponent as IconSoundcloud } from './assets/icons/soundcloud.svg';
import { ReactComponent as IconYoutube } from './assets/icons/youtube.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">
              <img src="https://i.ibb.co/B6BN68b/topaudio.png" alt="logo" />
            </a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/topaudioinc/" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com/topaudioinc" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com/topaudio.app/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <IconInstagram className="icon" />
            </a>
            <a href="https://soundcloud.com/topaudio" title="Soundcloud" target="_blank" rel="noopener noreferrer">
              <IconSoundcloud className="icon" />
            </a>
            <a href="https://soundcloud.com/topaudio" title="Youtube" target="_blank" rel="noopener noreferrer">
              <IconYoutube className="icon" />
            </a>   
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Top Audio</h1>
            <p>We're launching soon. Keep an eye out!</p>
          </div>
          <a href="mailto:contact@topaudio.app">
            <div className="cta">Drop us an Email</div>
          </a>
        </div>
        <div className="footer">
        <span>
        Copyright © 2020-2021 Top Audio, Inc. All rights reserved.

        </span>
        </div>
      </div>
    );
  }
}

export default App;