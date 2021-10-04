import { Row, Col, Container } from "react-bootstrap";

import Sidebar from "../components/includes/Sidebar";
import Wrapper from "../components/UI/Wrapper";
import UserTable from "../components/users/UserTable";
import Header from "../components/includes/Header";

const Users = () => {
  return (
    <div className="main">
      <Row className="m-0">
        <Col md={3} lg={3}>
          <Sidebar page="users" />
        </Col>

        <Col lg={9} className="mt-5">
          <Container>
            <Header page="Users" />

            <Wrapper>
              <UserTable />
            </Wrapper>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
