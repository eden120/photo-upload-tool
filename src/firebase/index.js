export {firestore, storage, auth} from "./firebase-init";
export {signIn, signOut, signUp, currentUser} from "./auth";
export { addDocument, setDocument, getDocument, getCollection, unwrapSnapshot } from './firestore';
export { upload } from './storage';