import PropTypes from 'prop-types';
import { Messge } from './ErrorMessage.styled';

export const ErrorMessage = ({ children }) => {
  return (
    <Messge role="alert">
      <h2>Oops! 😫</h2>
      <p>{children}</p>
    </Messge>
  );
};
ErrorMessage.propTypes = {
  children: PropTypes.array,
};
