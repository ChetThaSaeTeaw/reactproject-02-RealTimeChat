import React from 'react';
import { Button } from '@material-ui/core';
import firebase from '@firebase/app-compat';
import { auth } from '../services/firebase';
import './SignIn.css';


function SignIn() {

    function signInWithGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
    }

    return (
        <div className="SignIn">
            <h1>WellCome To Chat Application</h1>
            <h3>I hope you're happy</h3>
            <Button onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn;
