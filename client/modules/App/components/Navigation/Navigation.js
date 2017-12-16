import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/">Posts</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
};

Navigation.propTypes = {
};

export default Navigation;