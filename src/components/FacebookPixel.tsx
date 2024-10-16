import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

interface FacebookPixelProps {
  pixelId: string;
}

const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId }) => {
  useEffect(() => {
    ReactPixel.init(pixelId);
    ReactPixel.pageView();

    return () => {
      ReactPixel.init('');
    };
  }, [pixelId]);

  return null;
};

export default FacebookPixel;