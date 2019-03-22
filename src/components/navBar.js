import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import SignOutButton from './signOut'
import AuthUserContext from '../session/context'

const NavBar = () => 
    <>
    <AuthUserContext.Consumer>
        {authUser =>
        authUser ? <AuthorizedNavBar /> : <DefaultNavBar />}
    </AuthUserContext.Consumer>
    </>


const AuthorizedNavBar = () =>
    <ul>
        <li><Link to={ROUTES.ORDER}>Home</Link></li>
        <li><Link to={ROUTES.CONFIRM_ORDER}>Cart</Link></li>
        <li><Link to={ROUTES.HISTORY}>Order History</Link></li>
        <SignOutButton />
    </ul>

const DefaultNavBar = () =>
    <ul>
        <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
    </ul>
export default NavBar; 