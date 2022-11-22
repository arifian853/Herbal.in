import { createContext, useEffect, useState, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    function signupFunc(fullName, email, password) {
        return createUserWithEmailAndPassword(auth, fullName, email, password)
    }
    function loginFunc(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    return <userAuthContext.Provider value={{user, signupFunc, loginFunc}}> {children} </userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}