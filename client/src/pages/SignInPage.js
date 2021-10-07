import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { withFireBase } from '../components/Firebase';
import { TextField, Button } from '@material-ui/core';
import { compose } from 'recompose';
import { SignUpLink } from "./SignUpPage";

const SignInPage = () => {

    return (
        <>
            <div>Sign In Page</div>
            <SignInForm/>
            <SignUpLink/>
        </>
        
    )
}

const SignInFormBase = ({firebase, history}) => {
    const [signInFormData, setSignInFormData] = useState({email: '', password: '', error: null});
    const { email, password, error } = signInFormData;
    const isInvalid = email === '' || password === '';

    const onSubmit = (e) => {
        firebase.getSignInWithEmailAndPassword(email, password)
        .then(authUser => {
            setSignInFormData({ email: '', password: '', error: null });
            history.push(ROUTES.HOME);
        })
        .catch(error => {
            setSignInFormData({ error });
        });

        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField 
            name="email"
            value={email}
            onChange={(e) => setSignInFormData({ ...signInFormData, email: e.target.value })}
            type="text"
            placeholder="Email"/>
            <TextField 
            name="password"
            value={password}
            onChange={(e) => setSignInFormData({ ...signInFormData, password: e.target.value })}
            type="password"
            placeholder="Password"/>
            <Button disabled={isInvalid} type="submit">Sign In</Button>
            { error && <p>{error.message}</p> }
        </form>
    )
}

const SignInForm = compose(
    withRouter,
    withFireBase,
)(SignInFormBase)

export default SignInPage;
export { SignInForm }