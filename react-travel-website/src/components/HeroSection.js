import React from 'react';
import'../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= '../../public/videos/beach.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <Button className='btn' buttonStyle='btn--outline'
        buttonSize='btn--large'>GET STARTED</Button>
        <Button className='btn' buttonStyle='btn--primary'
          buttonSize='btn--large'>WATCH TRIALER <i className='far fa-play-circle' /></Button>
        
      </div>
    </div>
  )
}

export default HeroSection