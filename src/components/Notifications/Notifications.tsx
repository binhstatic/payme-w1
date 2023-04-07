type NotificationsProps = {
  title: string;
  body: string;
};

const Notifications = ({ title, body }: NotificationsProps) => {
  return (
    <div className='push-notification'>
      <h2 className='push-notification__title'>{title}</h2>
      <p className='push-notification__ text'>{body}</p>
    </div>
  );
};

export default Notifications;
