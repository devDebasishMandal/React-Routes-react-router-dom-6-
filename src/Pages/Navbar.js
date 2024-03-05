import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar

    // <a href="/">HOME</a>
    //     <a href="/about">ABOUT</a>
    //     <a href="/blog">BLOG</a>
    //     // <a href="/contact">CONTACT</a>