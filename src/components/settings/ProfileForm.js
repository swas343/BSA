import { Row, Col } from "react-bootstrap";
import classes from './ProfileForm.module.css';
import SubmitButton from "./SubmitButton";

const ProfileForm = () => {
  return (
    <form className={classes.profileForm} id="sm-center">
      <Row>
        <Col lg="6">
          <label>First Name</label>
          <input type="text" defaultValue="Surya" />
        </Col>
        <Col lg="6">
          <label>Last Name</label>
          <input type="text" defaultValue="Wiguna" />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label>Date of Birth</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="text" defaultValue="28 February 1996" />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label>Phone Number</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="number" defaultValue="+1283716291" />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label>Address</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="text" defaultValue="323 Fifth Ave. Canandaigua, NY" />
        </Col>
      </Row>
        <Row>
            <Col lg="12" className="text-end">
                <SubmitButton text="Save" />
            </Col>
        </Row>
    </form>
  );
};

export default ProfileForm;
