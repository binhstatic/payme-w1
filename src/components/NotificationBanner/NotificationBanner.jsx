import { useEffect, useState } from 'react';
import {
  getFirebaseToken,
  onForegroundMessage,
} from '../../utils/firebase/firebase.utils';
import { toast } from 'react-toastify';
import Notification from '../Notification/Notification';

const NotificationBanner = () => {
  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === 'default'
  );

  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const {
          notification: { title, body },
        } = payload;
        toast(<Notification title={title} body={body} />);
      })
      .catch((err) =>
        console.log(
          'An error occured while retrieving foreground message. ',
          err
        )
      );
  }, []);

  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        alert('Firebase token: ' + firebaseToken);
        console.log('Firebase token: ' + firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) =>
        console.error('An error occured while retrieving firebase token. ', err)
      );
  };

  return (
    <div className='notification-banner'>
      <a
        href='#'
        className='notification-banner__link'
        onClick={handleGetFirebaseToken}
      >
        Click here to enable push notifications
      </a>
    </div>
  );
};

export default NotificationBanner;
