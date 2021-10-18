import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import * as ROUTES from '../../constants/routes';
import SignOutButton from './signout';
import { AuthUserContext } from '../Session/index';
import useStyles from './styles';

const Navigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
            <AuthUserContext.Consumer>
                { authUser => authUser ? <AuthenticatedUser/> : <NonAuthenticatedUser/> }
            </AuthUserContext.Consumer>
        </AppBar>
    )
}

const AuthenticatedUser = () => (
    <>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
        </ul>
        <SignOutButton />
    </>
);
 
const NonAuthenticatedUser = () => (
    <>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
        </ul>
    </>
);

export default Navigation;