import { Container, Row, Col } from "react-bootstrap";
import classes from "./Settings.module.css";
import user from "../../assets/user.png";

import Header from "../includes/Header";
import Wrapper from "../UI/Wrapper";

import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";
import { ToggleButton } from "react-bootstrap";

const Setting = () => {
  return (
    <Container>
      <Header page="Settings" />

      <Row>
        <Col lg="7">
          <Wrapper>
            <Row className={classes.profileSection}>
              <Col lg="2" id="sm-center">
                <h2>Profile</h2>
              </Col>
            </Row>
            <Row className={` mt-3 ${classes.profileSection}`}>
              <Col lg="3">
                <img src={user} alt="user profile" />
                <div className="text-center mt-2">
                  <button className={classes.changeBtn}>Change</button>
                </div>
              </Col>

              <Col lg="9" className="mt-5 mt-md-0 ps-xs-1 ps-md-5">
                <ProfileForm />
              </Col>
            </Row>
          </Wrapper>
        </Col>
        <Col lg="5">
          <Wrapper>
            <Row className={classes.profileSection}>
              <Col lg="2">
                <h2>Account</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="12" className="mt-3">
                <AccountForm />
              </Col>
            </Row>
          </Wrapper>

          <Wrapper class="mt-3">
            <Row className={classes.profileSection}>
              <Col lg="2">
                <h2>Security</h2>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col lg="7">
                <label>2-Step Verification</label>
              </Col>
              <Col lg="5">
                <ToggleButton />
              </Col>
            </Row>
          </Wrapper>

          <Wrapper class="mt-3">
            <Row className={classes.dangerZone}>
              <Col lg="12">
                <h2>Danger Zone</h2>
              </Col>

              <Col lg="12" className="mt-3 text-center">
                  <button>Delete My Account</button>
              </Col>
            </Row>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
