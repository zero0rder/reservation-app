import React from 'react';
import { withFireBase } from '../Firebase';
import { Button } from '@material-ui/core';

const SignOutButton = ({firebase}) => {

    return (
        <Button type="button" onClick={firebase.doSignOut}>
            Sign Out
        </Button>
    );
}

export default withFireBase(SignOutButton);