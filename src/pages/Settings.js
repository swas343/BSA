import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/includes/Sidebar";

import Setting from "../components/settings/Settings";

const Settings = () => {
  return (
    <div className="main">
      <Row className="m-0">
        <Col md={3} lg={3}>
          <Sidebar page="settings" />
        </Col>

        <Col lg={9} className="mt-5">
          <Setting />
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
