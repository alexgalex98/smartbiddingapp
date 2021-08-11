import "../../styles/HomeCard.css";
import { FaRegEye } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomePageCard = ({
  id,
  prodName,
  startPrice,
  image,
  condition,
  category,
  buyNowPrice,
  description,
  secondsLeft,
  currentPrice,
}) => {
  console.log(image);
  return (
    <div className="product-wrap-10 mb-25">
      <div className="product-img">
        <a href={`/items/${id}`}>
          <img src={image}></img>
        </a>
        <div className="product-img-badges">
          <span>New</span>
        </div>
        <div className="product-action-2">
          <div title="Quick View " className="button">
            <FaRegEye />
          </div>
        </div>
      </div>
      <div className="product-content-2">
        <div className="title-price-wrap-2">
          <h3>
            <a>{prodName}</a>
          </h3>

          <div className="price-2">
            <span>{currentPrice}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
