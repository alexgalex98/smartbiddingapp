import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/ItemsActions";
import { fetchExpired } from "../../actions/ItemsActions";
import CardList from "./Cardlist";

function ItemsPageSmart({ itemsData, fetchItems, fetchExpired }) {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  let approved = [];
  for (let i = 0; i < itemsData.items.length; i++) {
    if (itemsData.items[i].status === "approved") {
      approved.push(itemsData.items[i]);
    }
  }
  console.log("APPROVED", approved);
  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>HELLO{itemsData.error}</h2>
  ) : (
    <div>
      <h2>Item List</h2>
      {console.log(itemsData.items[0], "ITMEMEEE")}

      <CardList items={approved} fetchExpired={submitExpired}></CardList>
    </div>
  );
}

const submitExpired = (id) => {
  fetchExpired(id);
};

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
    expiredItem: state.expiredItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchExpired: (id) => dispatch(fetchExpired(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPageSmart);
