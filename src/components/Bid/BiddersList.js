// import React from "react";
// import "../../styles/Bid.css";

// const BiddersList = ({ bidders }) => {
//   console.log("bidders:", bidders);

//   return (
//     <div className="box bidderslist">
//       <div className="row">
//         <h2>Current Bids</h2>
//       </div>
//       {bidders.map((bidder) => {
//         return (
//           <div>
//             <p>
//               {bidder.name}
//               {bidder.price}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
//   // : (
//   //     <div className="box">
//   //                 <div className="row"><h2>Current Bids</h2></div>
//   //                 <p>No bids yet!</p>

//   //         </div>
//   // )
// };

// export default BiddersList;
import React from "react";
import "../../styles/Bid.css";

const BiddersList = ({ bidders }) => {
  {
    console.log("bidders:", bidders);
  }

  return (
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
          {/* <li className="bidhistory">Bid History</li> */}
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse collapsedtable"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <table className="tablebid">
              <thead>
                <tr>
                  <th className="bidderrowheader">Bidder</th>
                  <th className="bidderrowheader">Bid Amount</th>
                </tr>
              </thead>
              {bidders.map((bidder) => {
                return (
                  <tbody>
                    <tr className="bidderrow">
                      <td className="bidderrow">{bidder.name}</td>
                      <td className="bidderrow">{bidder.price}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiddersList;
