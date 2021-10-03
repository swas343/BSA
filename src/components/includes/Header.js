import user from "../../assets/user.png";

import { Row, Col } from "react-bootstrap";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Row className="p-2">
      <Col lg={3} id="sm-center">
        <h3 className="font-weight-bolder">{props.page}</h3>
      </Col>
      <Col lg={9} className={`text-end ${classes.utilities}`}>
        <input type="text" placeholder="Search..." className="me-4" />
        <i className="fa fa-bell-o me-4 font-weight-bolder"></i>
        <img src={user} alt="user profile" />
      </Col>
    </Row>
  );
};

export default Header;
