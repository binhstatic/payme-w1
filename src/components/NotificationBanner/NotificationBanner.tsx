import { useState } from 'react';
import { getFirebaseToken } from '../../utils/firebase/firebase.utils';

const NotificationBanner = () => {
  console.log(Notification.permission);
  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === 'default'
  );

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
    <>
      {showNotificationBanner && (
        <div className='notification-banner'>
          <a
            href='#'
            className='notification-banner__link'
            onClick={handleGetFirebaseToken}
          >
            Click here to enable push notifications
          </a>
        </div>
      )}
    </>
  );
};

export default NotificationBanner;
