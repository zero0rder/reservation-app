import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Grow, Grid } from '@material-ui/core';
import Reservations from './components/Reservations/reservations';
import Navigation from './components/Navigation/navigation';
import Form from './components/Form/form';
import { getReservations } from './actions/reservations';
import * as ROUTES from './constants/routes';
import { withFireBase } from './components/Firebase';
import SignInPage from './SignInPage';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import AdminPage from './AdminPage';
import SignUpPage from './SignUpPage';
import useStyles from './styles';

const App = ({firebase}) => {
    const [currentId, setCurrentId] = useState(0);
    const [authUser, setAuthUser] = useState({user: null});
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(()=> {
        dispatch(getReservations());
        firebase.getOnAuthStateChanged((userState) => {
            if(userState) {
                setAuthUser({user: true});
            } else {
                setAuthUser({user: null});
            }
        });

    }, [dispatch, firebase]);
    
    return (
        <Container maxWidth='lg'>
            <BrowserRouter>
                <Navigation authUser={authUser} />
                <hr/>
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            </BrowserRouter>
            <Grow in>
                <Container className={classes.contentContainer}>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Reservations setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default withFireBase(App);