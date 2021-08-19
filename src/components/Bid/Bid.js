import "../../styles/Bid.css";
import BiddersList from "./BiddersList";

const Bid = ({ bid, onPriceChange, onBidSubmit, bidders, onBuySubmit }) => {
  return (
    <div>
      <div className="details">
        <div className="zoom-img big-img">
          <img src={"/" + bid.image} alt="image" className="card-img-top" />
          <div className="card-badge">
            <p className="badgetext">{bid.condition_}</p>
          </div>
        </div>
        <div className="box itemdetails">
          <div>
            <p className="category">{bid.category}</p>
          </div>

          <div className="row">
            <p className="detailstitle">{bid.prodname}</p>
          </div>
          <div className="table-responsive detailstable">
            <table>
              <tr>
                <th className="detailrow">
                  <strong className="textPrice"> Bid Start Price </strong>
                </th>
                <td className="detailrow startprice">${bid.currentprice}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25 detailrow" scope="row">
                  <strong className="textPrice">Buy Now Price</strong>
                </th>
                <td className="detailrow buynowprice"> ${bid.buynowprice}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25 detailrow" scope="row">
                  <strong className="textPrice">Description</strong>
                </th>
                <td className="detailrow">{bid.description}</td>
              </tr>
              <tr>
                <th>{bid.category}</th>
              </tr>
            </table>
          </div>

          <div className="input-group">
            <span className="input-group-addon">$</span>
            <form>
              <input
                type="number"
                className="bidInput"
                min={bid.currentprice + 1}
                placeholder={`min ${bid.currentprice}$`}
                onChange={(e) => {
                  if (e.target.value >= bid.currentprice + 1) {
                    onPriceChange(e.target.value);
                  }
                }}
              ></input>
            </form>
            <input
              className="placeBid"
              onClick={onBidSubmit}
              type="submit"
              value=" Place Bid"
            ></input>
          </div>
          <input
            className="placeBid"
            onClick={onBuySubmit}
            type="submit"
            value="Buy Now"
          ></input>
        </div>
      </div>
      {console.log(bidders, ": bidderswS")}
      {bidders != "NOT FOUND" && bidders.length > 0 ? (
        <div>
          <BiddersList bidders={bidders}></BiddersList>
        </div>
      ) : (
        <div className="bidderslist">
          <div className="box bidderslist">
            <div
              className="accordion accordion-flush bidders"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed collapseddiv"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Bid History
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse collapsedtable"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">No bids placed yet!!!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bid;
