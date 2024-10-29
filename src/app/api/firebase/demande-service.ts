import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './config';  // Firebase initialization

// Function to check if an email already exists in the "newsletter" collection
export const checkIfEmailExists = async (email: string): Promise<boolean> => {
  const q = query(collection(db, "demandes"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  // If querySnapshot is not empty, the email exists
  return !querySnapshot.empty;
};


import { doc, setDoc, serverTimestamp } from "firebase/firestore"; // Ensure you import serverTimestamp

// Save email to the "newsletters" collection
export const saveEmail = async (email: string) => {
  // Sanitize email to use as document ID
  const emailRef = doc(db, "demandes", email);

  // Set the email and createdAt fields in the document
  await setDoc(emailRef, {
    email,
    createdAt: serverTimestamp(), // Save the current timestamp
  });
};
