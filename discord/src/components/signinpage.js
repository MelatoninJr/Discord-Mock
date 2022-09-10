import React, { useEffect } from "react";
import './signinpage.css'
import DiscordBackground from './assets/discord.svg'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleButton } from 'react-google-button'
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'


const SignIn = ()  => {



      const {googleSignIn, user} = UserAuth()
      const navigate = useNavigate()

      const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            console.log(user)
            
        }
        catch(error) {
            console.log(error)
        }
      }
      
      useEffect(() => {
        if(user != null) {
            navigate('/d')
        } else if(user == null) {
            navigate('/')
        }
      }, [user])


    
 
  

    return(
        <div className="sign-container">
            <div className="button-container-sign">
                <div className="welcome-body-container">
                    <div className="welcome-title">Welcome Back!</div>
                    <div className="welcome-text">I am so excited to show you around!</div>
                </div>

                 <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            <img src={DiscordBackground} className='discord-background'></img>
        </div>
    )

}

export default SignIn;







/*
const signfunction =  () => { signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });}

    */