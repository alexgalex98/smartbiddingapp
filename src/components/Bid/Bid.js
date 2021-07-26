// import logo from '../../../public/images/ip12.jpg'
// const logo= require('./images/philips1.jpg')
import "./Bid.css";
import BiddersList from "./BiddersList";

const Bid = ({ bid, onPriceChange, onBidSubmit, bidders }) => {
  return (
    <div>
      <div className="details">
        <div className="big-img">
          <img src={"/" + bid.image} alt="image" className="card-img-top" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{bid.prodname}</h2>
          </div>
          <p>Description: {bid.description}</p>
          <p>Condition: {bid.condition_}</p>
          <p>Start price: {bid.startprice}</p>
          <p>Buy-now price: {bid.buynowprice}</p>
          <input onChange={(e) => onPriceChange(e.target.value)}></input>
          <input
            className="bidBtn"
            onClick={onBidSubmit}
            type="submit"
            value="Bid"
          ></input>
          <br></br>
          <button className="buy">Buy Now</button>
        </div>
        {console.log(bidders, ": bidderswS")}
        {bidders != "NOT FOUND" && bidders.length > 0 ? (
          <div>
            <BiddersList bidders={bidders}></BiddersList>
          </div>
        ) : (
          <div className="box">
            <div className="row">
              <h2>Current Bids</h2>
            </div>
            <p>No bids yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bid;
