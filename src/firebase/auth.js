import {auth, app} from './firebase-init';

/**
 * Sign Up
 * @param email
 * @param password
 * @returns {Promise<any>}
 */
export function signUp(email, password) {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = app.auth().currentUser;
        resolve({email: user.email, uid: user.uid});
      })
      .catch(error => reject(error));
  });
}

/**
 * Sign In
 * @param email
 * @param password
 * @returns {Promise<any>}
 */
export function signIn(email, password, remember) {
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = app.auth().currentUser;
        resolve({email: user.email, uid: user.uid});
      })
      .catch(error => reject(error));
  });
}

/**
 * Sign out
 * @returns {Promise<any>}
 */
export function signOut() {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        resolve('Success');
      })
      .catch(error => reject(error));
  });
}

/**
 * Get current user login
 * @returns {Promise<any>}
 */
export function currentUser() {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve({ uid: user.uid, email: user.email });
      } else {
        reject();
      }
    });
  });
}