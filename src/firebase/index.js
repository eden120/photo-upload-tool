import {firestore, storage, auth} from "./firebase-init";
import { signIn, signOut, signUp } from "./auth";

export {
  firestore,
  storage,
  auth,

  signOut,
  signIn,
  signUp
}