import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSimilarItems } from "../../actions/homePageActions";
import { fetchLastItems } from "../../actions/lastItemsActions";
import { fetchWonItems } from "../../actions/wonItemsAction";
import WonCardList from "../wonItems/wonCardlist";
import Pagination from "../Pagination";
import { FaExclamationCircle } from "react-icons/fa";

function WonItemsPageSmart({
  lastItems,
  fetchLastItems,
  wonItems,
  fetchWonItems,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);
  useEffect(() => {
    fetchWonItems();
    // fetchLastItems();
  }, [fetchWonItems]);

  console.log("SMARTTMY");
  console.log(wonItems, "IREE");
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = wonItems.wonItems.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return wonItems.loading ? (
    <h1>Items are loading!!</h1>
  ) : wonItems.error ? (
    <h1>ERROR{wonItems.error}</h1>
  ) : (
    <div>
      {console.log(wonItems.wonItems, "HHHHHHHHHHHHHHHH")}
      {wonItems.wonItems != "NOT FOUND" ? (
        <div>
          <WonCardList items={currentPosts}></WonCardList>

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={wonItems.wonItems.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <div className="messagenotItems">
          <h1 className="textNoItems">
            <FaExclamationCircle className="icon-emptymsg" />
            No items bought yet
          </h1>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wonItems: state.wonItems,
    lastItems: state.lastItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWonItems: () => dispatch(fetchWonItems()),
    fetchLastItems: () => dispatch(fetchLastItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WonItemsPageSmart);
