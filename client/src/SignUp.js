import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from './components/Form/form';
import * as ROUTES from '../../constants/routes';

//embed on SignIn page w/ redirect link
//this page shouldn't have a navigation route link
//should only show this form is person hasn't prev
//created an account
const SignUpPage = () => {

    return (
        <>
            <div>Sign Up</div>
            <SignUpForm />
        </>
    )
}

const SignUpForm = () => {
    const [signUpFormData, setSignUpFormData] = useState({userName: '', email: '', password1: '', password2: '', error: null})
    const { userName, email, password1, password2, error } = signUpFormData;
    const onSubmit = () => {}
    const onChange = () => {}

    return (
        <Form onSubmit={onSubmit}>
            <input 
            name="username"
            value={userName}
            onChange={onChange}
            type="text"
            placeholder="Full Name"/>
            <input 
            name="email"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Email"/>
            <input 
            name="password1"
            value={password1}
            onChange={onChange}
            type="password"
            placeholder="Password"/>
            <input 
            name="password2"
            value={password2}
            onChange={onChange}
            type="password"
            placeholder="Password Confirm"/>
            <button type="submit">Sign Up</button>
            //The error objects from Firebase have this message property by default
            //once binded to FB, it should be populated if error message exists
            { error && error.message }
        </Form>
    );
}

const SignUpLink = () => (

    <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
)

export default SignUpPage;
export { SignUpForm, SignUpLink }