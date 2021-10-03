import classes from './SocialBtn.module.css';

const SocialBtn = (props) => {
  return (
    <button className={classes.socialBtn}>
      <span className={classes.icon}>
        <img src={props.icon} alt="social icon" />
      </span>
      {props.text}
    </button>
  );
};

export default SocialBtn;
