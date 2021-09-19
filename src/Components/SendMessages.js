import React , { useState } from 'react';
import { Button , Input } from '@material-ui/core';
import { db , auth } from '../services/firebase';
import firebase from '@firebase/app-compat';
import './Chat.css';



function SendMessages() {
    const [ msg , setMsg ] = useState("");

   async function sendMessages (e) {
        e.preventDefault();
        const { uid , photoURL } = auth.currentUser;
        await db.collection('messages').add({
            text : msg,
            photoURL,
            uid,
            createdAt : firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }

    return (
        <div>
            <form onSubmit={sendMessages} className="box-chat">
                <Input className="Input-Text" onChange={e => setMsg(e.target.value)} value={msg} placeholder="Message..."/>
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}

export default SendMessages;
