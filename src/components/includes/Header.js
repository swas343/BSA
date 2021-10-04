import { Row, Col } from "react-bootstrap";
import classes from "./Header.module.css";
import { DropdownButton } from "react-bootstrap";

import AuthCtx from "../../store/auth-ctx";
import { useContext } from "react";

const Header = (props) => {
  const authCtx = useContext(AuthCtx);
  // const imgUrl = JSON.parse(localStorage.getItem('auth'))['profileObj']['imageUrl']

  return (
    <Row className="p-2">
      <Col lg={3} id="sm-center">
        <h3 className="font-weight-bolder">{props.page}</h3>
      </Col>
      <Col lg={9} className={`text-end ${classes.utilities}`}>
        
        <span className="me-4"><input type="text" placeholder="Search..." /> <i className="fa fa-search"></i></span>

        <i className="fa fa-bell-o me-4 font-weight-bolder"></i>

        <DropdownButton
          className={`pull-right ${classes.dropdown}`}
          eventKey={3}
          title={<img src={authCtx.imgUrl} alt="user profile" />}
        >
          <li eventKey="3" onClick={authCtx.logout}>
            <i className="fa fa-sign-out fa-fw"></i> Logout
          </li>
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default Header;
