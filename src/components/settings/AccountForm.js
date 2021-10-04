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
          <input className="w-100" type="text" defaultValue="suryawigunaa@gmail.com" />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label className="mt-2">Current Password</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <span>
            <input className="m-0" type="password" defaultValue="+1283716291" />
            <i className="fa fa-eye ms-3"></i>
          </span>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <label className="mt-4">New Password</label>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
        <span>
            <input className="m-0" type="text" defaultValue="123456" />
            <i className="fa fa-eye-slash ms-3"></i>
          </span>
        </Col>
      </Row>
        <Row>
            <Col lg="12" className="text-end mt-4">
                <SubmitButton text="Save" />
            </Col>
        </Row>
    </form>
    )
}

export default AccountForm;