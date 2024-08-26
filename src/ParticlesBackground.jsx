import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', () => {
        console.log('Particles.js config loaded');
      });
    }
  }, []);

  return <div id="particles-js" style={{ width: '100%', height: '100vh', position: 'absolute' }}></div>;
};

export default ParticlesBackground;