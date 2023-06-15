import { Audio } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay.styled';
export const Loader = () => {
  return (
    <Overlay>
      <Audio />
    </Overlay>
  );
};
