// // import logo from '../../../public/images/ip12.jpg'
// // const logo= require('./images/philips1.jpg')

// import "../../styles/Bid.css";
// import BiddersList from "./BiddersList";

// const Bid = ({ bid, onPriceChange, onBidSubmit, bidders, secondsleft }) => {
//   let time = new Date();
//   let seconds = new Date();
//   console.log(bid.secondsleft, "seconfsleft");
//   seconds.setSeconds(bid.secondsleft);
//   console.log(time, "PRIMA");
//   console.log(seconds.getSeconds(), "BIDDD");
//   const sec = bid.secondsleft * 1000;
//   console.log(sec, "SECONDS");
//   // time.setSeconds(time.getSeconds() + sec);
//   // const hoursMinSecs = {
//   //   hours: 1,
//   //   minutes: 20,
//   //   seconds: secondsleft,
//   // };
//   console.log(time, "INAINTE111111111111111111");
//   //time.setSeconds(time.getSeconds() + 1);
//   // time = new Date(time.getTime() + 1000 * 10);

//   return (
//     <div>
//       {/* {secondsleft} */}
//       {console.log(bid.secondsleft, "INAINTE")}
//       {/* <MyTimer expiryTimestamp={time}></MyTimer> */}
//       {/* <MyCountdown sec={secondsleft * 1000} />
//       <Countdown date={Date.now() + secondsleft * 1000} />
//       <CountDownTimer hoursMinSecs={hoursMinSecs} /> */}
//       {/* <BidTimer timeFromServer={bid.secondsleft} /> */}
//       {/* <Timer></Timer> */}
//       {/* {console.log(Date.parse(200000) - Date.parse(new Date()), "CHICII")} */}
//       {/* <Example></Example> */}
//       {/* {console.log(time, "TIMMEs")} */}
//       <div className="details">
//         <div className="zoom-img big-img">
//           <img src={"/" + bid.image} alt="image" className="card-img-top" />
//           <div className="card-badge">
//             <p className="badgetext">{bid.condition_}</p>
//           </div>
//         </div>
//         <div className="box itemdetails">
//           <div className="row">
//             <p className="title">{bid.prodname}</p>
//           </div>
//           <div className="table-responsive detailstable">
//             <table>
//               <tr>
//                 <th className="pl-0 w-25 detailrow" scope="row">
//                   <strong> Bid Start price</strong>
//                 </th>
//                 <td className="detailrow">${bid.startprice}</td>
//               </tr>
//               <tr>
//                 <th className="pl-0 w-25 detailrow" scope="row">
//                   <strong>Buy Now Price</strong>
//                 </th>
//                 <td className="detailrow"> ${bid.buynowprice}</td>
//               </tr>
//               <tr>
//                 <th className="pl-0 w-25 detailrow" scope="row">
//                   <strong>Description</strong>
//                 </th>
//                 <td className="detailrow">{bid.description}</td>
//               </tr>
//             </table>
//           </div>
//           <input onChange={(e) => onPriceChange(e.target.value)}></input>
//           {/* <Link to={`/items/${bid.id}`}> */}
//           <input
//             className="bidBtn"
//             onClick={onBidSubmit}
//             type="submit"
//             value="Bid"
//           ></input>
//           {/* </Link> */}
//           {/* <Link to={`/items/${6}`} className="btn btn-outline-success btnDiv">
//             Go to bid
//           </Link> */}
//           <br></br>
//           <button className="buy">Buy Now</button>
//         </div>
//       </div>
//       {console.log(bidders, ": bidderswS")}

//       {bidders !== "NOT FOUND" && bidders.length > 0 ? (
//         <div>
//           <BiddersList bidders={bidders}></BiddersList>
//         </div>
//       ) : (
//         <div className="bidderslist">
//           <div>
//             <h2>Current Bids</h2>
//           </div>
//           <p>No bids yet!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bid;
// import logo from '../../../public/images/ip12.jpg'
// const logo= require('./images/philips1.jpg')
// import "./Bid.css";
// import logo from '../../../public/images/ip12.jpg'
// const logo= require('./images/philips1.jpg')
// import "./Bid.css";
import "../../styles/Bid.css";
import BiddersList from "./BiddersList";

const Bid = ({ bid, onPriceChange, onBidSubmit, bidders }) => {
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
                <td className="detailrow startprice">${bid.startprice}</td>
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
            </table>
          </div>

          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input
              type="number"
              className="bidInput"
              min="0"
              onChange={(e) => onPriceChange(e.target.value)}
            ></input>
            <input
              className="placeBid"
              onClick={onBidSubmit}
              type="submit"
              value=" Place Bid"
            ></input>
          </div>

          <button className="buy">Buy Now</button>
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
