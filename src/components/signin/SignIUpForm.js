import classes from "../../pages/Signin.module.css";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form>
      <Row>
        <Col lg="6">
          <label for="firstname">First Name</label>
          <input className="w-100" type="text" />
        </Col>
        <Col lg="6">
          <label for="lastname">Last Name</label>
          <input className="w-100" type="text" />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <label>Email address</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="email" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <label>Password</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="password" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <label>Confirm Password</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="password" className="w-100" />
        </Col>
      </Row>
      <Row>
        <span className="text-start mt-2 mb-2">
          <input type="checkbox" /> I agree the {" "}
          <NavLink to="#">terms and conditions</NavLink>
        </span>
      </Row>
      <Row>
        <NavLink to="/signin" className={` mt-2 ${classes.signinBtn}`}>
          Sign Up
        </NavLink>
      </Row>
    </form>
  );
};

export default SignUpForm;
