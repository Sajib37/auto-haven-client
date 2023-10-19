import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext(null);
export const useAuth = () => {
    return useContext(AuthContext);
}


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Login with Google
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Create User with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login with email and password
    const emailLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Log Out method
    const logOut = () => {
        return signOut(auth);
    }

    // Forgot password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    // onAuth State change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        emailLogin,
        logOut,
        resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;