import { BiLogoPlayStore  } from 'react-icons/bi';
import { FaAppStoreIos } from 'react-icons/fa';
import React from 'react';
import './Home.css';
import {Button} from "../components"

export function Home() {
  return (
    <div className="main-container">
      <div className="content-section">
        <h1>Nagarik App</h1>
        <p>All Government Services in a Single App.</p>
        <div className="button-group">
        <Button
  link="https://play.google.com/store/apps/details?id=com.yajtech.nagarikapp&hl=en"
  icon={ BiLogoPlayStore  }
  altText="Play Store Logo"
  availableOnText="AVAILABLE ON"
  storeNameText="PLAY STORE"
/>
<Button
  link="https://apps.apple.com/us/app/nagarik-app/id1493013430"
  icon={ FaAppStoreIos}
  altText="App Store Logo"
  availableOnText="AVAILABLE ON THE"
  storeNameText="APP STORE"
/>
        </div>
      </div>
      <div className="image-section">
        <img src='/images/mobile.png' alt="Feature Image" />
      </div>
    </div>
  );
}
