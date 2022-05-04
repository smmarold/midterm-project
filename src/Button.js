import PropTypes from 'prop-types';
import './App.css';

const Button = (props) => {

    return <button className={`button`} style={{backgroundColor: props.color}} onClick={()=>props.onHandleClick()}>{props.children}</button>
}

Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  
Button.defaultProps = {
    color: "#fff",
  };

export default Button;