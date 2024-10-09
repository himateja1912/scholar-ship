import React from 'react';
import './Homepage.css';




const Home = () => {
    
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Scholarship Hub</h1>
        <div style={{padding:"7.5px",backgroundColor:"white",borderRadius:"25px",color:"black",width:'50%',height:'auto',margin:"auto"}}>
        <p >Empowering Education, Enhancing Futures</p></div>
        <a href='/view'><button className='explore-button' role='button'>Explore Scholarships</button></a>
      </header>
      <section className="intro-section">
        <h2>About Us</h2>
        <p>
          Scholarship Hub is a platform dedicated to connecting students with
          life-changing scholarship opportunities. Our mission is to make
          education accessible and affordable for all.
        </p>
      </section>
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Search and apply for scholarships</li>
          <li>Personalized matching for optimal results</li>
          <li>Comprehensive scholarship database</li>
          <li>User-friendly application process</li>
        </ul>
      </section>
      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        <a href='/login'><button className='reg-button'>
        Register Now</button></a>
        
      </section>
    </div>
  );
};

export default Home;

