import PropTypes from 'prop-types';
import './Description.css';

const Description = ({ text }) => {
  return <p className="description">{text}</p>;
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
