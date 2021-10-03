import classes from "./Signin.module.css";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.jpg";

import { NavLink } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

import Wrapper from "../components/UI/Wrapper";
import SocialBtn from "../components/UI/SocialBtn";
import SignUpForm from "../components/signin/SignIUpForm";

const SignUp = () => {
  return (
    <Row className={classes.signin}>
      <Col sm="5" md="5" lg="5" className={`d-none d-sm-flex ${classes.leftSection}`}>
        <h1>Dash.</h1>
      </Col>
      <Col sm="7" md="7" lg="7" className={`pt-3 pt-md-0 ${classes.rightSection}`}>
        <div className={classes.content}>
          <h1>Create an account</h1>
          <p>Create an account to use dashboard</p>

          <Row className={`mb-2`}>
            <Col lg="6" className="mb-2 mb-md-0">
              <SocialBtn icon={google} text="Sign up with Google" />
            </Col>
            <Col lg="6">
              <SocialBtn icon={apple} text="Sign up with Apple" />
            </Col>
          </Row>

          <Wrapper>
            <SignUpForm />
          </Wrapper>

          <span className={`mt-3 ${classes.footer}`}>
            Already have an account? <NavLink to="/signin">Sign in here</NavLink>
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
