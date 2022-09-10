import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from './components/header'
import PageContainer from './components/pagecontainer'
import SignIn from './components/signinpage'
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom'
import {UserAuth} from './context/AuthContext'
import { useEffect } from "react";
function App(props) {
      
  const {googleSignIn, user} = UserAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(user != null) {
        navigate('/d')
    } else if(user == null) {
        navigate('/')
    }
  }, [user])


  return (
    <PageContainer />
  );
}

export default App;
