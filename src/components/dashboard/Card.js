import classes from "./Card.module.css";
import useHttp from "../../hooks/useHttp";
import Loader from "../UI/Loader";

const Card = (props) => {
  const [isLoading, error, data] = useHttp(props.text);

  const centerClass = isLoading ? 'text-center' : ''

  return (
    <div className={`${classes.card} ${centerClass}`} style={{ background: props.background }}>
      {isLoading && <Loader height="50px" />}
    
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <>
          <i className={props.icon}></i>

          <p className="mt-4">{props.text}</p>

          <h3>{data}</h3>
        </>
      )}
    </div>
  );
};

export default Card;
