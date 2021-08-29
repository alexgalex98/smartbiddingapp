import BidTimer from "./BidTimer";
import "../../styles/Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import DialogBox from "./DialogBox";
import handleClickToOpen from "./DialogBox";
import DialogBoxSmart from "./DialogBoxSmart";
import "../../styles/AdminCard.css";

const CardAdmin = ({
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
    <div className="card cardAdmin ">
      <div className="imagediv">
        <img src={image} alt="image1" className="card-img-top" />
      </div>
      <div className="cardBodyAdmin">
        <h4 className="card-title  adminCardTitle">{prodName}</h4>
        <p className="adminPrice">${startPrice}</p>
        <p className="card-text text-secondary overflow-ellipsisAdmin adminDesc">
          {description}
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. */}
        </p>
      </div>
      <div className="parentbtnAdmin">
        {/* <Link
          to={`/items/${id}`}
          className="btn btn-outline-success btnDiv btnAdmin"
        >
          More Details
        </Link> */}
        <Button
          variant="outlined"
          className="optionButton"
          onClick={handleClickToOpen}
        >
          More Details
        </Button>
        {open ? (
          <DialogBoxSmart
            prodName={prodName}
            description={description}
            image={image}
            open={open}
            handleToClose={handleToClose}
            id={id}
            startPrice={startPrice}
            category={category}
            buyNowPrice={buyNowPrice}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CardAdmin;
