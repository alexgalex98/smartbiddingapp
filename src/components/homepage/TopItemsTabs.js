// import CarouselHome from "./CarouselHome";
import "../../styles/TopItemsTabs.css";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../itemsPage/Card";
import HomePageCard from "./HomePageCard";

// import { Tabs from "react-bootstrap";

// import { Tabs } from "react-bootstrap";

const TopItemsTabs = () => {
  return (
    <div>
      <div className="container">
        <div className="section-title-8 text-center mb-30 bottom-border">
          <h2>Products Collection</h2>
          <p className="bottomBorder"></p>
        </div>
        <div>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-60 justify-content-center nav-pills tabtext"
          >
            <Tab eventKey="home" title="New Arrivals">
              <Container className="cardlist">
                <Row className="row">
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>

                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="profile" title="Most Popular">
              <Container className="cardlist">
                <Row className="row">
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>

                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                  <Col>
                    <HomePageCard
                      id={"djdjs"}
                      prodName={"djjdnjds"}
                      startPrice={"djjdnjd"}
                      category={"djjdnjd"}
                      buyNowPrice={"djjdnjd"}
                      description={"djjdnjd"}
                      condition={"djjdnjd"}
                      image={"djjdnjd"}
                      secondsLeft={"djjdnjd"}
                    />
                  </Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default TopItemsTabs;
