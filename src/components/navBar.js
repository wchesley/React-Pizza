import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ ...props }) =>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/sign_up'>Login or Sign up</Link></li>
    </ul>
export default NavBar; 