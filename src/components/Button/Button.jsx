import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ stateStatus, mashineStatus, loadingMore }) => {
  return (
    <Btn
      onClick={loadingMore}
      disabled={stateStatus === mashineStatus.PENDING ? true : false}
    >
      {stateStatus === mashineStatus.PENDING ? 'Loading....' : 'Load More'}
    </Btn>
  );
};
Button.propTypes = {
  loadingMore: PropTypes.func,
  stateStatus: PropTypes.string.isRequired,
};
