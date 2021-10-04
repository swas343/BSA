import classes from "./Main.module.css";

import { Container, Row, Col } from "react-bootstrap";

import Card from "./Card";
import GraphCard from "./GraphCard";
import Wrapper from "../UI/Wrapper";
import Header from "../includes/Header";
import ScheduleCard from "../UI/ScheduleCard";

import { lineData, Piedata } from "../../helpers/data";

const Main = () => {
  return (
    <Container>
      <Header page="Dashboard" />

      <Row>
        <Col md="3" lg="3" className="mb-3 mb-md-0">
          <Card
            background="#DDEFE0"
            icon="fa fa-download"
            text="Total Revenues"
            figure="$2,129,430"
          />
        </Col>
        <Col md="3" lg="3" className="mb-3 mb-md-0">
          <Card
            background="#F4ECDD"
            icon="fa fa-tags"
            text="Total Transactions"
            figure="1,520"
          />
        </Col>
        <Col md="3" lg="3" className="mb-3 mb-md-0">
          <Card
            background="#EFDADA"
            icon="fa fa-thumbs-o-up"
            text="Total Likes"
            figure="9,721"
          />
        </Col>
        <Col md="3" lg="3" className="mb-3 mb-md-0">
          <Card
            background="#DEE0EF"
            icon="fa fa-users"
            text="Total Users"
            figure="892"
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg="12">
          <Wrapper>
            <GraphCard data={lineData} heading="Activities" type="line" />
          </Wrapper>
        </Col>
      </Row>

      <Row className={`mt-5 mb-5`}>
        <Col lg="6" className={`mb-3 mb-md-0 ${classes.topProducts}`}>
          <Wrapper>
            <Row>
              <Col lg="6">
                <h3>Top Products</h3>
              </Col>
              <Col lg="6" className="text-end">
                <span>
                  May-June 2021 <i className="fa fa-angle-down"></i>
                </span>
              </Col>
            </Row>
            <Row className={`mt-3 ${classes.topProductDetails}`}>
              <Col lg="6" className={classes.pieContainer}>
                <GraphCard data={Piedata} type="pie" />
              </Col>
              <Col lg="6">
                <p>
                  Basic tees <br /> <span>55%</span>
                </p>
                <p>
                  Custom Short Pants <br /> <span>31%</span>
                </p>
                <p>
                  Super Hoodies <br /> <span>14%</span>
                </p>
              </Col>
            </Row>
          </Wrapper>
        </Col>
        <Col lg="6" className={`${classes.topProducts}`}>
          <Wrapper>
            <Row>
              <Col lg="6">
                <h3>Today's Schedule</h3>
              </Col>
              <Col lg="6" className="text-end">
                <span>
                  See All <i className="fa fa-angle-right"></i>
                </span>
              </Col>
            </Row>
            <Row className={`mt-3 ${classes.topProductDetails}`}>
              <ScheduleCard
                heading="Meeting with supplier from Kuta Bali"
                time="14:00-15:00"
                location="at Sunset Road, Kuta, Bali"
                borderColor="#9BDD7C"
              />

              <ScheduleCard
                heading="Check Operation at Giga Factory 1"
                time="18:00-20:00"
                location="at Central Jakarta"
                borderColor="#6972C4"
              />
            </Row>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
