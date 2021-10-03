import loadingImg from "../../assets/loader.gif";
import { Fragment } from "react";

const Loader = (props) => {
  return (
    <Fragment>
      <img className="text-center" src={loadingImg} alt="loader" height={props.height} />{" "}
    </Fragment>
  );
};

export default Loader;
