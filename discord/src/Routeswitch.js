import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./components/signinpage";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { AuthContextProvider } from './context/AuthContext'


const RouteSwitch = () => {




  return (

    <div>
    <AuthContextProvider>
        <HashRouter baseline='/'>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/d" element={<App  />} />
        </Routes>
        </HashRouter>
    </AuthContextProvider>

    </div>
  );
};

export default RouteSwitch;