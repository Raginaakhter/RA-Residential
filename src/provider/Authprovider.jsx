import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/Firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile as firebaseUpdateProfile,
    sendPasswordResetEmail
} from "firebase/auth";

// Create context
export const AuthContext = createContext();

// Initialize Firebase auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create new user
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in
    const userlogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Update user profile
    const updateUserProfile = (updatedData) => {
        return firebaseUpdateProfile(auth.currentUser, updatedData);
    };

    // Reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // Auth state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Context value
    const authInfo = {
        user,
        setUser,
        createNewUser,
        userlogin,
        logOut,
        updateUserProfile,
        resetPassword,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
