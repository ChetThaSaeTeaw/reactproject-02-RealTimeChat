import React from 'react';
import { Button } from '@material-ui/core';
import { auth } from '../services/firebase';
import "./SignOut.css";

function SignOut() {
    return (
        <div className="SignOut">
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut;
