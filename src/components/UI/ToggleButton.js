import classes from './ToggleButton.module.css';

const ToggleButton = () => {
  return (
    <div className={classes.customSwitch}>
    <label className={`${classes.switch}`}>
      <input type="checkbox" />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
    </div>
  );
};

export default ToggleButton;
