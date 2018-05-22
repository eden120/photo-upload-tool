import { firestore as db } from './firebase-init';

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