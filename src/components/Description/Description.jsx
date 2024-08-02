import PropTypes from 'prop-types';
import './Description.css';

const Description = ({ title, text }) => {
  return (
    <div className="description">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Description;