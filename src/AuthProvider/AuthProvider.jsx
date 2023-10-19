import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext(null);
export const useAuth = () => {
    return useContext(AuthContext);
}


const AuthProvider = ({ children }) => {
    
    const [user, setuser] = useState(null);
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

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;