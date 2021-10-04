import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/includes/Sidebar";
import Main from "../components/dashboard/Main";

const Dashboard = () => {
  return (
    <div className="main">
      <Row className="m-0">
        <Col md={3} lg={3}>
          <Sidebar page="dashboard" />
        </Col>

        <Col md="9" lg={9} className="mt-5">
          <Main />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
