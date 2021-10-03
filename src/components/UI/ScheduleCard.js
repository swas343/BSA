import classes from './ScheduleCard.module.css';

const ScheduleCard = (props) =>{
    return (
        <div className={`mb-3 ${classes.scheduleCard}`} style={{'borderColor':props.borderColor}}>
            <p>{props.heading}</p>
            <span>{props.time} <br /> {props.location}</span>
        </div>
    )
}

export default ScheduleCard;