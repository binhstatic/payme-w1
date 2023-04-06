import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
  apiKey: 'AIzaSyCCpVCWF1BoVbDZ9daeF7xL2-tl18ZeDhU',
  authDomain: 'payme-w1.firebaseapp.com',
  projectId: 'payme-w1',
  storageBucket: 'payme-w1.appspot.com',
  messagingSenderId: '334617199917',
  appId: '1:334617199917:web:6335a6c78dad87c265ffa4',
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  console.log('ddddd');
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export const getOrRegisterServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    return window.navigator.serviceWorker
      .getRegistration('/firebase-push-notification-scope')
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          '/firebase-messaging-sw.js',
          {
            scope: '/firebase-push-notification-scope',
          }
        );
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};

const messaging = getMessaging(firebaseApp);

export const getFirebaseToken = () =>
  getOrRegisterServiceWorker().then((serviceWorkerRegistration) =>
    getToken(messaging, {
      vapidKey:
        'BMy8ODMDbsGGx5q1L_tb22M7fgYdjt2hm49xH7NWLYxzq2nv8HFDOO4Go2RalzRteZ67KPiG9LHPI8g4_8Op7n4',
      serviceWorkerRegistration,
    })
  );

export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
