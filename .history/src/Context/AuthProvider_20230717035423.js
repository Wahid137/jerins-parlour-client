import React, { useState } from 'react';
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <div>

        </div>
    );
};

export default AuthProvider;

