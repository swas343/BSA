import classes from './ToggleButton.module.css';

const ToggleButton = () => {
  return (
    <label className={`${classes.switch}`}>
      <input type="checkbox" />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default ToggleButton;
