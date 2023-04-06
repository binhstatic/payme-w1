import { Link } from 'react-router-dom';

import './error.scss';

const Error = () => {
  return (
    <div className='not-found'>
      <img
        className='not-found__img'
        src='https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png'
        alt='not-found page'
      />
    </div>
  );
};

export default Error;
