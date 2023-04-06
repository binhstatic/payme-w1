import { useRef, useState } from 'react';
import Button from '../../components/Button/Button';

import './Home.scss';

const Home = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleStopCapture = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
      setStream(null);
    }
  };

  return (
    <div className='home'>
      <video className='home__video' ref={videoRef} autoPlay></video>
      <div className='home__control'>
        <Button onClick={handleStartCapture}>Start Camera</Button>
        <Button onClick={handleStopCapture}>Stop Camera</Button>
      </div>
    </div>
  );
};

export default Home;
