import { firestore as db } from './firebase-init';

/**
 * format data from snapshot
 * @param entity
 * @returns {{} & {id} & any}
 */
export function unwrapSnapshot(entity) {
  return Object.assign({}, { id: entity.id }, entity.data());
}

/**
 * Add a document
 * @param collection
 * @param data
 * @returns {Promise<firebase.firestore.DocumentReference>}
 */
export function addDocument(collection, data) {
  return db.collection(collection).add(data);
}

/**
 * Set a document
 * @param collection
 * @param doc
 * @param data
 * @returns {Promise<void>}
 */
export function setDocument(collection, doc, data) {
  return db.collection(collection).doc(doc).set(data);
}

export function getDocument(path) {
  return new Promise((resolve, reject) => {
    db.doc(path).get()
      .then((docRef) => resolve(unwrapSnapshot(docRef)))
      .catch((error) => reject(error));
  });
}