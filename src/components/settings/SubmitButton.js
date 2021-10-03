import classes from './SubmitButton.module.css';

const SubmitButton = (props) => {
    return <button className={classes.submit}>{props.text}</button>
}

export default SubmitButton