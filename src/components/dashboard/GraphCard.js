import { Line, Pie } from "react-chartjs-2";
import { Fragment } from "react";
import Loader from "../UI/Loader.js";
import classes from "./GraphCard.module.css";

import useHttp from "../../hooks/useHttp.js";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const GraphCard = (props) => {
  const [isLoading, error, data] = useHttp("lineData");

  if (props.type === "line") {
    return (
      <Fragment>
        {isLoading && (
          <div className="text-center">
            <Loader />
          </div>
        )}

        {!isLoading && error && <p className="text-center">{error}</p>}

        {!isLoading && !error && (
          <>
            <div className={`mb-3 ${classes.graphHeading}`}>
              <h2>{props.heading}</h2>
              <span className="mb-2">
                May - June 2021 <i className="fa fa-angle-down"></i>
              </span>
            </div>
            <Line data={data} options={options} height="70px" />
          </>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {props.type === "pie" && (
        <Pie
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          }}
          data={props.data}
          height="30px"
        />
      )}
    </Fragment>
  );
};

export default GraphCard;
