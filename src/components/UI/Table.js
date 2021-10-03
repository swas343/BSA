import classes from "./Table.module.css";

const Table = (props) => {
  return (
    <table className={`table table-striped ${classes.customTable}`}>
      <tbody>
        {props.data.map((row) => {
          return (
            <tr key={Math.random()}>
              <td> <img src={`/assets/users/${row[0]}`} alt="user profile" /> </td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>{row[4]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
