import { Audio } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay.styleg';
export const Loader = () => {
  return (
    <Overlay>
      <Audio />
    </Overlay>
  );
};
