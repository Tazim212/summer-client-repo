/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase_config";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);
    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoggedUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        });
    }

    const googleSigned = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loggedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        return () =>{
            return unSubscribe()
        }
    })
    const authInfo = {
        user,
        registerUser,
        updateUser,
        LoggedUser,
        loggedOut,
        googleSigned,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;