import { Line, Pie } from "react-chartjs-2";
import { Fragment } from "react";
import Loader from '../UI/Loader.js';

import useHttp from "../../hooks/useHttp.js";

const GraphCard = (props) => {

  const [isLoading, error, data] = useHttp("lineData");

  if(props.type === 'line'){
    return (
      <Fragment>
        {isLoading && <Loader />}

        {!isLoading && error && <p>{error}</p>}

        {!isLoading && !error && <Line data={data} height="70px" />}
      </Fragment>
      
    )
  }

  return (
    <Fragment>
      {props.type === "pie" && (
        <Pie
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins:{legend: { display: false}}
          }}
          data={props.data}
          height="30px"
        />
      )}
    </Fragment>
  );
};

export default GraphCard;
