import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/ItemsActions";
import CardListAdmin from "../itemsPage/CardListAdmin";
import Pagination from "../Pagination";

function AdminPageSmart({ itemsData, fetchItems }) {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  let disapproved = [];
  for (let i = 0; i < itemsData.items.length; i++) {
    if (itemsData.items[i].status === "pending") {
      disapproved.push(itemsData.items[i]);
    }
  }
  console.log("DISAPPROVED", disapproved);
  // Get current items
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = disapproved.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>HELLO{itemsData.error}</h2>
  ) : (
    <div>
      <h2>a</h2>
      {console.log(itemsData.items[0], "ITMEMEEE")}

      <CardListAdmin items={currentPosts}></CardListAdmin>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={disapproved.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageSmart);
