import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card';
import './Card.css'


const CardList = ({ items }) => {
    return (
       // <div>
		/*	{ <Container>
				<Row>
				{
					items.map(item => {
						return (
									<Col xs={12} md={6} lg={3} key={item.id}>
										<Card
												id={item.id}
												prodName ={item.prodname}
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
					})
					
				}
				</Row>
			</Container> }*/
			<div>{
				<Container className='container-fluid d-flex justify-content-center'>
				<Row>
				{
				items.map(item => {
					return(
							
								<Col className='col-md-6 col-lg-3 col-xs-12'>
								<Card
												id={item.id}
												prodName ={item.prodname}
												startPrice={item.startprice}
												category={item.category}
												buyNowPrice={item.buynowprice}
												description={item.description}
												condition={item.condition_}
												image={item.image}
												secondsLeft={item.secondsleft}
											/>
								</Col>
						
						
						)
				})}
				</Row>
				</Container>
				}
			</div>	
  		// </div>
		
    );
}

export default CardList;