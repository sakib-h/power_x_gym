import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "./FirebaseConfig";

// --> Firebase initialization <--
const app = initializeApp(FirebaseConfig);

// --> Export <--
export const auth = getAuth(app);

const AuthContext = createContext();
export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	// --> Sign Up <--
	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// --> Login with Google  <--
	const googleProvider = new GoogleAuthProvider();
	const googleLogIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	// --> Login with Facebook  <--
	const facebookProvider = new FacebookAuthProvider();
	const facebookLogIn = () => {
		return signInWithPopup(auth, facebookProvider);
	};

	// --> Sign in  with Email & Pass  <--

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = { signup, currentUser, googleLogIn, facebookLogIn, login };
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
