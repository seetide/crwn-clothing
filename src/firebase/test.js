import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore;

firestore
  .collection('users')
  .doc('7m2gzZhJLR2cQZuAm0o2')
  .collection('cartItems')
  .doc('WnO55Kfm2y2kFNZrxHpA');
