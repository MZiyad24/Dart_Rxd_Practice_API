import * as admin from 'firebase-admin';
import * as serviceAccount from './firebase-service-account.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      serviceAccount as any,
    ),

    storageBucket:
      'restaurantguide-27cc1.appspot.com',
  });
}

export const db = admin.firestore();

export const bucket =
  admin.storage().bucket();

export default admin;