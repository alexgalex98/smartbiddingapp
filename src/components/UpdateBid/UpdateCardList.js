import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/Card.css";
import UpdateCard from "./UpdateCard";

const UpdateCardList = ({ items }) => {
  return (
    <div>
      {
        <Container className="container-fluid d-flex justify-content-center">
          <Row>
            {items.map((item) => {
              return (
                <Col className="col-md-6 col-lg-3 col-xs-12">
                  <UpdateCard
                    id={item.id}
                    prodName={item.prodname}
                    startPrice={item.startprice}
                    category={item.category}
                    buyNowPrice={item.buynowprice}
                    description={item.description}
                    condition={item.condition_}
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

export default UpdateCardList;
