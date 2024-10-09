import React, { useRef, useEffect } from 'react';
import './Navbar.css'; // Assuming you have a style.css file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
  const hamburgerRef = useRef(null);
  const menubarRef = useRef(null);

  const toggleNav = () => {
    menubarRef.current.classList.toggle("active");
    hamburgerRef.current.classList.toggle("hamburger-active");
  };

  useEffect(() => {
    const mobileNav = hamburgerRef.current;
    if (mobileNav) {
      mobileNav.addEventListener("click", toggleNav);
    }
    // Clean up the event listener when the component unmounts
    return () => {
      if (mobileNav) {
        mobileNav.removeEventListener("click", toggleNav);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='logo.jpg' alt='logo' />
        <h1>scholarship</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href='#'>About us</a>
        </li>
        <li>
          <Link to="/view">ScholarShips</Link>
        </li>
        <li>
          <a href="/track">Track Application</a>
        </li>
        <li>
          <a href="/apply">Apply Now</a>
        </li>
      </ul>
      <div className="hamburger" ref={hamburgerRef}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className="menubar" ref={menubarRef}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Track Application</a>
          </li>
          <li>
            <a href="#">Apply Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
