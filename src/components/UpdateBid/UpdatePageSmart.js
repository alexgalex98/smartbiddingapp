// export function AdminPageSmart() {
//   return <div>MIAU</div>;
// }
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/ItemsActions";
import UpdateCardList from "./UpdateCardList";

function UpdatePageSmart({ itemsData, fetchItems }) {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  let disapproved = [];
  for (let i = 0; i < itemsData.items.length; i++) {
    if (itemsData.items[i].status === "pending") {
      disapproved.push(itemsData.items[i]);
    }
  }
  console.log("DISAPPROVED", disapproved);
  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>HELLO{itemsData.error}</h2>
  ) : (
    <div>
      <h2>Item List UP</h2>
      {console.log(itemsData.items[0], "ITMEMEEE")}

      <UpdateCardList items={itemsData.items}></UpdateCardList>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePageSmart);
