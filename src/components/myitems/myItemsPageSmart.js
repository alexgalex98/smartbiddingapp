import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/myItemsActions";
import MyCardList from "./myCardList";
import Pagination from "../Pagination";
import { FaExclamationCircle } from "react-icons/fa";
function MyItemsPageSmart({ myItems, fetchItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  let approved = [];
  console.log("SMARTTMY");
  console.log(myItems, "IREE");
  for (let i = 0; i < myItems.myItems.length; i++) {
    console.log("FOR");
    if (myItems.myItems[i].status === "pending") {
      approved.push(myItems.myItems[i]);
    }
  }
  // Get current items
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = approved.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(approved, "SMART");
  return myItems.loading ? (
    <h1>Items are loading!!</h1>
  ) : myItems.error ? (
    <h1>ERROR{myItems.error}</h1>
  ) : (
    <div>
      {approved != 0 ? (
        <div>
          <MyCardList items={currentPosts}></MyCardList>
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
            <FaExclamationCircle className="icon-emptymsg" /> You didn't create
            any items.
          </h1>
        </div>
      )}
      {/* <h1 className="text-center">My items</h1> */}
      {/* <MyCardList items={currentPosts}></MyCardList>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={approved.length}
        paginate={paginate}
        currentPage={currentPage}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myItems: state.myItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyItemsPageSmart);
