import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToggle = () => {
    if (scrollPosition === 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      <button >
        <span>@ 2024 Copyright RGCI&RC. All rights reserved.</span>
        <span onClick={handleScrollToggle} className='topbtn'><i class="fas fa-chevron-up"></i></span>
      </button>
    </div>
  );
};

const styles= {
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  }
};
  

export default Footer;



