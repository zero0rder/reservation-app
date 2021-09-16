import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import * as ROUTES from '../../constants/routes';
import SignOutButton from './signout';
// import useStyles from './styles';

const Navigation = ({authUser}) => {

    return (
        <AppBar position="static" color="inherit">
            { authUser.user ? <AuthenticatedUser/> : <NonAuthenticatedUser/> }
        </AppBar>
    )
}

const AuthenticatedUser = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            </ul>
            <SignOutButton />
        </div>
    );
}
 
const NonAuthenticatedUser = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;