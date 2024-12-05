import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase.init.config";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const authInfo = {
        user,
        setUser,
        loading,
        creatingWithEmail,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;