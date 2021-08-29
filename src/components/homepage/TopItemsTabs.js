// import CarouselHome from "./CarouselHome";
import "../../styles/TopItemsTabs.css";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../itemsPage/Card";
import HomePageCard from "./HomePageCard";

// import { Tabs from "react-bootstrap";

// import { Tabs } from "react-bootstrap";

const TopItemsTabs = ({ lastItems, mostPopularItems }) => {
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
                <Row className="row rowHome">
                  {lastItems.map((item) => {
                    return (
                      <Col className="col-md-6 col-lg-4 col-12 col-xs-12">
                        <HomePageCard
                          id={item.id}
                          prodName={item.prodname}
                          startPrice={item.startprice}
                          category={item.category}
                          buyNowPrice={item.buynpwprice}
                          description={item.description}
                          condition={item.condition_}
                          image={item.image}
                          secondsLeft={item.secondsleft}
                          currentPrice={item.currentprice}
                        ></HomePageCard>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="profile" title="Most Popular">
              <Container className="cardlist">
                <Row className="row rowHome">
                  {mostPopularItems.map((item) => {
                    return (
                      <Col className="col-md-6 col-lg-4 col-12 col-xs-12">
                        <HomePageCard
                          id={item.id_item}
                          prodName={item.prodname}
                          startPrice={item.startprice}
                          category={item.category}
                          buyNowPrice={item.buynpwprice}
                          description={item.description}
                          condition={item.condition_}
                          image={item.image}
                          secondsLeft={item.secondsleft}
                          currentPrice={item.currentprice}
                        ></HomePageCard>
                      </Col>
                    );
                  })}
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
