import { Row, Col } from "react-bootstrap";
import classes from './ProfileForm.module.css';
import SubmitButton from "./SubmitButton";

const AccountForm = () => {
    return (
        <form className={classes.profileForm}>
     
      <Row>
        <Col lg="6">
          <label>Email address</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="text" defaultValue="suryawigunaa@gmail.com" />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label>Current Password</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="password" defaultValue="+1283716291" />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label>New Password</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <input type="text" defaultValue="123456" />
        </Col>
      </Row>
        <Row>
            <Col lg="12" className="text-end">
                <SubmitButton text="Save" />
            </Col>
        </Row>
    </form>
    )
}

export default AccountForm;