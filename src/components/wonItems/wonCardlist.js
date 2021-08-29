import { Col, Container, Row } from "react-bootstrap";
import WonCard from "./wonCard";
import "../../styles/Card.css";

const WonCardList = ({ items }) => {
  return (
    <div className="itemsListSpacing">
      {
        <Container className="mycardlist">
          <Row>
            {items.map((item) => {
              return (
                <Col className="col-md-6 col-lg-3 col-xs-12">
                  <WonCard
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

export default WonCardList;
