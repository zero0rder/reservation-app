import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navigation from './components/Navigation/navigation';
import * as ROUTES from './constants/routes';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import SignUpPage from './pages/SignUpPage';
import { withAuth } from './components/Session/index';

const App = () => {
    return (
        <Container maxWidth='lg'>
            <BrowserRouter>
                <Navigation />
                <hr/>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            </BrowserRouter>
        </Container>
    );
}

export default withAuth(App);