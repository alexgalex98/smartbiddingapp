import React from "react";
import MyCountdown from "../itemsPage/MyCountdown";
import Countdown from "react-countdown";
import "../../styles/Card.css";
import { Link } from "react-router-dom";
import DialogBoxUpdateSmart from "./DialogBoxUpdateSmart";
import Button from "@material-ui/core/Button";
import { FaEdit } from "react-icons/fa";
import "../../styles/DialogEdit.css";

const MyCard = ({
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
  console.log(
    id,
    "ID",
    prodName,
    "PRODNAME",
    startPrice,
    "STARTPRICE",
    image,
    "IMAGE",
    condition,
    "CONDITION",
    category,
    "CAT",
    buyNowPrice,
    "BUYPRICE",
    description,
    "DESC",
    secondsLeft,
    "SECONDS"
  );
  const [open, setOpen] = React.useState(false);
  console.log(image);
  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleToClose = () => {
    setOpen(false);
  };
  return (
    <div className="card">
      <div className="">
        <img src={image} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark div">
        <p className="card-title overflow-ellipsis mycardtitle title">
          {prodName}
        </p>
        <div className="wrapper">
          <div className="bid">
            <p className="overflow-ellipsis">CURRENT BID</p>
            <p className="overflow-ellipsis price">${currentPrice}</p>
          </div>
          <div className="time">
            <p className="overflow-ellipsis">TIME REMAINING</p>
            <p className="overflow-ellipsis timeperiod">
              <MyCountdown sec={secondsLeft * 1000} renderer />
            </p>
          </div>
        </div>
      </div>
      <div className="parentbtnUpdate flex-parent jc-center">
        <Link to={`/items/${id}`} className="btn margin-right">
          More Details
        </Link>
        <Button
          variant="outlined"
          className="btnEdit"
          onClick={handleClickToOpen}
        >
          <FaEdit></FaEdit>
        </Button>
        {open ? (
          <DialogBoxUpdateSmart
            prodName={prodName}
            description={description}
            startprice={startPrice}
            image={image}
            buynowprice={buyNowPrice}
            category={category}
            condition={condition}
            bidduration={secondsLeft}
            open={open}
            handleToClose={handleToClose}
            id={id}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MyCard;
