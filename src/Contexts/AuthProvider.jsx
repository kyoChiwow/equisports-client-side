import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Utils/firebase.init.config";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Setting up observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, []);

    // Creating User using Email and Password
    const creatingWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    // Creating Update User
    const updateUser = (updateDataObj) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateDataObj);
    }

    // Sign In User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in User With Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    } 

    // Sign Out User
    const signOutUser = () => {
        signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        creatingWithEmail,
        updateUser,
        signInUser,
        googleSignIn,
        signOutUser,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;