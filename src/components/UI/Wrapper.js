import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return <div className={`${classes.wrapper} ${props.class}`} style={props.styles}>{props.children}</div>;
};

export default Wrapper;
