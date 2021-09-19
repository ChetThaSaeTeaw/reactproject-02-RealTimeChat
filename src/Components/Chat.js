import React , { useState , useEffect } from 'react'
import { auth, db } from '../services/firebase';
import SendMessages from './SendMessages';
import SignOut from './SignOut';
import './Chat.css';


function Chat() {

    const [ messages , setMessages ] = useState([]);

    useEffect(() => {
       db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
           setMessages(snapshot.docs.map(doc => doc.data()))
       })
    }, [])

    return ( 
        <div className="container">
            <SignOut />
            <h1>Chat Page</h1>
            <div className="msgs">
            {messages.map(({ id , text , photoURL , uid}) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser ? "sent" : "received"}`}>
                    <img src={photoURL} alt="ProfilePic" />
                    <p>{text}</p>
                    </div>
                </div>
            ))}
            <SendMessages />
            </div>
        </div>
    )
}

export default Chat;
