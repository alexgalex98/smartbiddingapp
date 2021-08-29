import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/onBiddedItemsActions";
import OnBiddedItemsCardList from "./onBiddedItemsCardList";
import Pagination from "../Pagination";
import { FaExclamationCircle } from "react-icons/fa";

function OnBiddedItemsPageSmart({ onBiddedItems, fetchItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  console.log("SMMSAMSMASMAMS");
  useEffect(() => {
    console.log("PAGESMART", fetchItems);
    fetchItems();
  }, [fetchItems]);
  let approved = [];
  console.log("SMARTTONBIDDED");
  console.log(onBiddedItems.onBiddedItems, "PageSmartONBIDDED");
  for (let i = 0; i < onBiddedItems.onBiddedItems.length; i++) {
    console.log("FOR");
    if (onBiddedItems.onBiddedItems[i].status === "approved") {
      approved.push(onBiddedItems.onBiddedItems[i]);
    }
  }
  console.log(approved, "SMART");

  // Get current items
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = approved.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return onBiddedItems.loading ? (
    <h1>Items are loading!!</h1>
  ) : onBiddedItems.error ? (
    <h1>ERROR{onBiddedItems.error}</h1>
  ) : (
    <div>
      {/* <h1 className="text-center">Bidded on items</h1> */}
      {approved != 0 ? (
        <div>
          <OnBiddedItemsCardList items={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={approved.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <div className="messagenotItems">
          <h1 className="textNoItems">
            <FaExclamationCircle className="icon-emptymsg" /> You placed no bids
          </h1>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    onBiddedItems: state.onBiddedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnBiddedItemsPageSmart);
