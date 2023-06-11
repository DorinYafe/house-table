import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <div className={classes.navbar}>
      <Link to='/'>Go to home</Link>
      <Link to='createhouse'>Create a house</Link>
    </div>
  );
}

export default Navbar;
