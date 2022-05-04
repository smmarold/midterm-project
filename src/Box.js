import PropTypes from 'prop-types';
import './App.css';

const Box = (props) => {
    let data = props;
    return (
      <div>
        {data.length && 
          data.map((element) => {
            return <div key={element.id}>{element.title}</div>;
          })}
      </div>);
  };
  
  Box.propTypes = {
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    roundedCorners: PropTypes.bool,
  };
  
  Box.defaultProps = {
    size: "sm",
  };

  export default Box;