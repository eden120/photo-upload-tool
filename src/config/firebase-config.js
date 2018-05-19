/**
 * Firebase config for webapp
 */
export const config = {
  apiKey: "AIzaSyBCHRMBw5JUCKUFOlziWDH5quuDk1qfu1Q",
  authDomain: "photo-upload-tool.firebaseapp.com",
  databaseURL: "https://photo-upload-tool.firebaseio.com",
  projectId: "photo-upload-tool",
  storageBucket: "photo-upload-tool.appspot.com",
  messagingSenderId: "164390466568"
};

/**
 * firestore setting
 * @type {{timestampsInSnapshots: boolean}}
 */
export const fireStoreSetting = {
  timestampsInSnapshots: true
};