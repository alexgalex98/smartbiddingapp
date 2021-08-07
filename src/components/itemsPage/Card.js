import BidTimer from "./BidTimer";
import "../../styles/Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useEffect } from "react";
import MyCountdown from "./MyCountdown";
import Countdown from "react-countdown";

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

    <div className="card">
      <div className="">
        <img src={image} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark div">
        <p className="card-title overflow-ellipsis title">{prodName}</p>
        {/* <p className="card-text text-secondary overflow-ellipsis">
          {description}
        </p> */}
        <div className="wrapper">
          <div className="bid">
            <p className="overflow-ellipsis">CURRENT BID</p>
            <p className="overflow-ellipsis price">$11</p>
          </div>
          <div className="time">
            <p className="overflow-ellipsis">TIME REMAINING</p>
            <p className="overflow-ellipsis timeperiod">
              <MyCountdown sec={secondsLeft * 1000} renderer />
            </p>
          </div>
        </div>
        {/* <p>
          TIME:{secondsLeft}
          <br></br>
          <Countdown date={Date.now() + secondsLeft * 1000} />
        </p>
        <p>
          TIME:{secondsLeft}
          <br></br>
          <MyCountdown sec={secondsLeft * 1000} renderer />
        </p> */}
      </div>

      <div className="parentbtn">
        <Link
          to={`/items/${id}`}
          className="btn btn-outline-success btnDiv bidbtn"
        >
          Go to bid
        </Link>
        {/* <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
          Options
        </Button> */}
        {/* {open ? (
          <DialogBoxSmart
            prodName={prodName}
            description={description}
            image={image}
            open={open}
            handleToClose={handleToClose}
            id={id}
          />
        ) : null} */}

        {/* <DialogBox
          prodName={prodName}
          description={description}
          image={image}
          open={open}
        ></DialogBox> */}
      </div>
    </div>

    // </div>
  );
};

export default Card;

// const [open, setOpen] = React.useState(false);

// const handleClickToOpen = () => {
//   setOpen(true);
// };
// const handleToClose = () => {
//   setOpen(false);
// };
// <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
// Open Demo Dialog
// </Button>
// <Dialog open={open} onClose={handleToClose}>
// <DialogTitle>{"How are you?"}</DialogTitle>
// <DialogContent>
//   <DialogContentText>
//     I am Good, Hope the same for you!
//   </DialogContentText>
// </DialogContent>
// <DialogActions>
//   <Button onClick={handleToClose} color="primary" autoFocus>
//     Approve
//   </Button>
//   <Button onClick={handleToClose} color="primary" autoFocus>
//     Disapprove
//   </Button>
// </DialogActions>
// </Dialog>
