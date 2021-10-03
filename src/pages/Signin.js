import classes from "./Signin.module.css";
import google from '../assets/icons/google.png';
import apple from '../assets/icons/apple.jpg';

import { Row, Col } from "react-bootstrap";

import { NavLink } from 'react-router-dom';

import Wrapper from "../components/UI/Wrapper";
import SocialBtn from '../components/UI/SocialBtn';
import GoogleAuth from "../components/UI/GoogleAuth";

const SignIn = () => {

  const noLoginMethod = () => {
    alert('This login method has not been integrated yet. Please use google login');
  }

  return (
    <Row className={classes.signin}>
      {/* xs="6" sm="6" md="6"  */}
      <Col sm="5" md="5" lg="5" className={`d-none d-sm-flex ${classes.leftSection}`}>
        <h1>Dash.</h1>
      </Col>
      <Col sm="7" md="7" lg="7" className={`pt-3 pt-md-0 ${classes.rightSection}`}>
        <div className={classes.content}>
          <h1>Sign In</h1>
          <p>Sign in to your account</p>

          <Row className={`mb-3`}>
            <Col lg="6" className="mb-2 mb-md-0">
              <GoogleAuth icon={google} text="Sign in with Google" />
            </Col>
            <Col lg="6">
              <SocialBtn icon={apple} text="Sign in with Apple" onClick={noLoginMethod} />
            </Col>
          </Row>

          <Wrapper>
            <Col lg="12">
              <label className="mb-1" htmlFor="email">Email address</label>
              <input type="email" placeholder="Enter Email" />

              <label className="mb-1" htmlFor="password">Password</label>
              <input type="password" placeholder="Enter Password" />

              <NavLink className="mt-3 mb-3 d-block" to="#" >Forgot password?</NavLink>

              <NavLink to="#" className={` mt-2 ${classes.signinBtn}`} onClick={noLoginMethod} >Sign In</NavLink>
            </Col>
          </Wrapper>

          <span className={`mt-3 ${classes.footer}`}>
            Don't have an account? <NavLink to="/signup">Register here</NavLink>
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
