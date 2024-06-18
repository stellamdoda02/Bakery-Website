import React from 'react';
import background from '../Images/background2.png'; // Adjust the path to your background image

const AboutPage = () => {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
        color: 'white',
        textAlign: 'center',
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="about-content" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About Us</h1>
        <p style={{ fontSize: '1.6rem', lineHeight: '2.4rem' }}>
          Our bakery has been serving delicious pastries since 1978...
        </p>
        <p style={{ fontSize: '1.6rem', lineHeight: '2.4rem' }}>
          We're obsessed with using only the finest ingredients, sourced locally whenever possible, to ensure that every bite is a delight.
        </p>

        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
        <p style={{ fontSize: '1.6rem', lineHeight: '2.4rem' }}>
          At Bacelles bakery, we're passionate about spreading joy, one delicious treat at a time. Our story began with a simple dream: to create a bakery where people could come together to savor the sweetness of life. Founded by Stella, our bakery is built on a foundation of love, family, and a commitment to quality.
        </p>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.6rem', lineHeight: '2.4rem' }}>
          At Bacelles bakery, our mission is to provide our customers with an unforgettable baking experience. We're dedicated to crafting artisanal treats that not only tantalize the taste buds but also evoke feelings of warmth and comfort. We believe that every bite should be a celebration of life's simple pleasures, and we're committed to making that happen.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
