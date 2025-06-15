import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/Firebase.config";
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,
    updateProfile as firebaseUpdateProfile
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user, loading);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // sign in
    const userlogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

// update profile
    const updateUserProfile = (updatedData) => {
        return firebaseUpdateProfile(auth.currentUser, updatedData);
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userlogin,
        updateUserProfile,
        loading,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
