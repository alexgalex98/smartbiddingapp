import "../../styles/Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import DialogBox from "./DialogBox";
import handleClickToOpen from "./DialogBox";
import DialogBoxSmart from "./DialogBoxSmart";

const UpdateCard = ({
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
  const [open, setOpen] = React.useState(false);
  console.log(image);
  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleToClose = () => {
    setOpen(false);
  };
  return (
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
        <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
          Options
        </Button>
        {open ? (
          <DialogBoxSmart
            prodName={prodName}
            description={description}
            image={image}
            open={open}
            handleToClose={handleToClose}
            id={id}
          />
        ) : null}
      </div>
    </div>

    // </div>
  );
};

export default UpdateCard;
