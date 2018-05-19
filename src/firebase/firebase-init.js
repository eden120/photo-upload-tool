import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

import {config, fireStoreSetting} from '../config/firebase-config';

export const app = firebase.initializeApp(config);

export const firestore = app.firestore();
firestore.settings(fireStoreSetting);

export const storage = app.storage();

export const auth = app.auth();