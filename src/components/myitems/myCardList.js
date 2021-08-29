import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./myCard";
import "../../styles/Card.css";

const MyCardList = ({ items }) => {
  return (
    <div className="itemsListSpacing">
      {
        <Container className="mycardlist">
          <Row>
            {items.map((item) => {
              return (
                <Col className="col-md-6 col-lg-3 col-xs-12">
                  <MyCard
                    id={item.id}
                    prodName={item.prodname}
                    startPrice={item.startprice}
                    category={item.category}
                    buyNowPrice={item.buynowprice}
                    description={item.description}
                    condition={item.condition_}
                    image={item.image}
                    secondsLeft={item.secondsleft}
                    currentPrice={item.currentprice}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      }
    </div>
  );
};

export default MyCardList;
