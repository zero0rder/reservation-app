import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { withFireBase } from '../components/Firebase';
import { TextField, Button } from '@material-ui/core';
import { compose } from 'recompose';

const SignUpPage = () => {

    return (
        <>
            <div>Sign Up</div>
            <SignUpForm /> 
        </>
    )
}

const SignUpFormBase = ({firebase, history}) => {
    const [signUpFormData, setSignUpFormData] = useState({userName: '', email: '', password1: '', password2: '', error: null})
    const { userName, email, password1, password2, error } = signUpFormData;
    const isInvalid = password1 !== password2 || password1 === '' || userName === '' || email === '';

    const onSubmit = (e) => {
        firebase.getCreateUserWithEmailAndPassword(email, password1)
        .then(authUser => {
            setSignUpFormData({ userName: '', email: '', password1: '', password2: '', error: null });
            history.push(ROUTES.ACCOUNT);
        })
        .catch(error => {
            setSignUpFormData({ error });
        });

        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField 
            name="username"
            value={userName}
            onChange={(e) => setSignUpFormData({ ...signUpFormData, userName: e.target.value })}
            type="text"
            placeholder="Full Name"/>
            <TextField 
            name="email"
            value={email}
            onChange={(e) => setSignUpFormData({ ...signUpFormData, email: e.target.value })}
            type="text"
            placeholder="Email"/>
            <TextField 
            name="password1"
            value={password1}
            onChange={(e) => setSignUpFormData({ ...signUpFormData, password1: e.target.value })}
            type="password"
            placeholder="Password"/>
            <TextField 
            name="password2"
            value={password2}
            onChange={(e) => setSignUpFormData({ ...signUpFormData, password2: e.target.value })}
            type="password"
            placeholder="Password Confirm"/>
            <Button disabled={isInvalid} type="submit">Sign Up</Button>
            { error && error.message }
        </form>
    );
}

const SignUpForm = compose(
    withRouter,
    withFireBase,
    )(SignUpFormBase);
    //withRouter(withFireBase(SignUpFormBase));

const SignUpLink = () => (
    <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink }