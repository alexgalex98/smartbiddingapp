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

export default CardAdmin;

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
