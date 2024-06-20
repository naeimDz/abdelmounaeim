// utils/auth.ts
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const createUserWithEmail = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // User signed up successfully
  } catch (error) {
    console.error('Error creating user:', error);
    // Handle error (e.g., show error message to user)
  }
};

export const signInWithEmail = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // User signed in successfully
  } catch (error) {
    console.error('Error signing in:', error);
    // Handle error (e.g., show error message to user)
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    // User signed out successfully
  } catch (error) {
    console.error('Error signing out:', error);
    // Handle error (e.g., show error message to user)
  }
};
