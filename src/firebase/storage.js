import {storage} from './firebase-init';

// Create a root reference
const storageRef = storage.ref();

/**
 * Upload file
 * @param path
 * @param file
 * @returns {Promise<any>}
 */
export function upload(path, file) {
  const ref = storageRef.child(path);
  return new Promise((resolve, reject) => {
    ref.put(file)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
          resolve(downloadURL);
        });
      })
      .catch(error => reject(error));
  });
}