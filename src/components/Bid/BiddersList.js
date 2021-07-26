import React from 'react';
import './Bid.css'



const BiddersList = ({ bidders }) => {
    {console.log("bidders:",bidders)}
    
    return  (
        
            <div className="box">
                    <div className="row"><h2>Current Bids</h2></div>
                    {
                        
                        bidders.map(bidder=>{
                           
                            return(
                                <div>
                                <p>{bidder.name}{bidder.price}</p>
                                
                                </div>
                                )
                            
                           
                        })
                    }
                    
            </div>
    
		
    )
    // : (
    //     <div className="box">
    //                 <div className="row"><h2>Current Bids</h2></div>
    //                 <p>No bids yet!</p>
                    
    //         </div>
    // )
}

export default BiddersList;