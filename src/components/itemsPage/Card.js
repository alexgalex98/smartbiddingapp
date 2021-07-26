import BidTimer from "./BidTimer";
import "./Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = ({
  id,
  prodName,
  startPrice,
  image,
  condition,
  category,
  buyNowPrice,
  description,
  secondsLeft,
}) => {
  console.log(image);
  return (
    // <div className='tc bg-light-green dib br3 ma2 bw2 shadow-5'>
    // 	{/* {console.log('sec',secondsLeft)} */}
    // 	<img alt='' width='100px' height='auto' src={image}></img>
    // 	<div>
    // 		<h1 className='f5 lh-copy'>Product : {prodName}</h1>
    // 		<h1 className='f6 lh-copy'>Category: {category}</h1>
    // 		<p className='f6 lh-copy '>Current bid: {startPrice}</p>
    // 		<p className='f6 lh-copy '>Buy now price: {buyNowPrice}</p>
    // 		<p className='f5 desc'>Description: </p>
    // 		<p className='desc'>{description}</p>
    // 		<p>Condition: {condition}</p>
    // 		<div>Time left: <BidTimer timeFromServer={secondsLeft}/></div>

    // 	</div>

    <div className="card text-center">
      <div className="overflow">
        <img src={image} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark div">
        <h4 className="card-title ">{prodName}</h4>
        <p className="card-text text-secondary overflow-ellipsis">
          {description}
        </p>
      </div>
      <div className="parentbtn">
        <Link to={`/items/${id}`} className="btn btn-outline-success btnDiv">
          Go to bid
        </Link>
      </div>
    </div>

    // </div>
  );
};

export default Card;
