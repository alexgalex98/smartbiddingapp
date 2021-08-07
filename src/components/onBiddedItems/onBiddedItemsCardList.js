import { Col, Container, Row } from "react-bootstrap";
import OnBiddedItemsCard from "./onBiddedItemsCard";
import "../../styles/Card.css";

const OnBiddedItemsCardList = ({ items }) => {
  return (
    <div>
      {
        <Container className="cardlist">
          <Row>
            {items.map((item) => {
              return (
                <Col className="col-md-6 col-lg-3 col-xs-12">
                  <OnBiddedItemsCard
                    id={item.id}
                    prodName={item.prodname}
                    startPrice={item.startprice}
                    category={item.category}
                    buyNowPrice={item.buynowprice}
                    description={item.description}
                    condition={item.condition}
                    image={item.image}
                    secondsLeft={item.secondsleft}
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

export default OnBiddedItemsCardList;
