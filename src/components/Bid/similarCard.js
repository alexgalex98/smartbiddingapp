import "../../styles/Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useEffect } from "react";

const SimilarCard = ({
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
    <div className="card text-center">
      <div className="overflow">
        <img src={"/" + image} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark div">
        <h4 className="card-title ">{prodName}</h4>
        <p className="card-text text-secondary overflow-ellipsis">
          {description}
        </p>
      </div>
      <div className="parentbtn">
        <a href={`/items/${id}`} className="btn btn-outline-success btnDiv">
          Go to bid
        </a>
      </div>
    </div>
  );
};

export default SimilarCard;
