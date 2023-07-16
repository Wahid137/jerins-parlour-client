import React from 'react';
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;

