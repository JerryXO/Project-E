import '../App.css';
import PropTypes from 'prop-types';

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickFunc: PropTypes.func, // Make clickFunc optional
};


function Button({ name, clickFunc }) {
  return (
    <button className='btn' onClick={clickFunc}>{name}</button>
  )
}
export default Button