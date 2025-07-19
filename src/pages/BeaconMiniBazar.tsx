import React from 'react';

function BeaconMiniBazar() {
  return (
    <div className="page-container">
      <h1 id="beacon-wallet-mini-bazar">Beacon Wallet Mini Bazar (iOS)</h1>
      
      <p>The Beacon Wallet Mini Bazar app is a new iOS application built with @permaweb/libs, bringing the power of the permaweb and Bazar marketplace to mobile users.</p>

      <h2 id="video-walkthrough">Video Walkthrough</h2>
      
      <div style={{textAlign: 'center', margin: '2em 0'}}>
        <video width="360" height="640" controls>
          <source src="https://video.twimg.com/amplify_video/1943047123366490112/vid/avc1/720x1282/yz2SIt_A9q0RNgx3.mp4?tag=14" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 id="what-is-mini-bazar">What is Mini Bazar?</h2>
      
      <ul>
        <li><strong>Mobile-first marketplace</strong>: Buy, sell, and manage digital assets on your iPhone</li>
        <li><strong>Powered by @permaweb/libs</strong>: Uses the same SDK as Bazar and Bazar Studio</li>
        <li><strong>Seamless wallet integration</strong>: Connect with Beacon Wallet for secure transactions</li>
      </ul>

      <h2 id="features">Features</h2>
      
      <ul>
        <li>Browse and search digital assets</li>
        <li>Buy and sell collectibles and NFTs</li>
        <li>Manage your profile and collections</li>
        <li>Fast, intuitive mobile experience</li>
      </ul>

      <h2 id="how-it-was-built">How It Was Built</h2>
      
      <p>Mini Bazar leverages @permaweb/libs for:</p>
      
      <ul>
        <li>Asset management</li>
        <li>Profile and collection features</li>
        <li>Secure wallet authentication</li>
      </ul>

      <h2 id="learn-more">Learn More</h2>
      
      <ul>
        <li><a href="/bazar">Bazar & Bazar Studio</a> - The web marketplace</li>
        <li><a href="/profiles">Profile Management</a> - User profiles with @permaweb/libs</li>
        <li><a href="/atomic-assets">Atomic Assets</a> - Digital asset creation</li>
        <li><a href="/collections">Collections</a> - Asset organization</li>
      </ul>

      <hr />
      
      <p>Mini Bazar demonstrates the power of @permaweb/libs for building mobile-first permaweb applications. Start building your own mobile dApp today!</p>
    </div>
  );
}

export default BeaconMiniBazar; 