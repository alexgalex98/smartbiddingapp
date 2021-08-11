import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/myItemsActions";
import MyCardList from "./myCardList";

function MyItemsPageSmart({ myItems, fetchItems }) {
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
  console.log(approved, "SMART");
  return myItems.loading ? (
    <h1>Items are loading!!</h1>
  ) : myItems.error ? (
    <h1>ERROR{myItems.error}</h1>
  ) : (
    <div>
      <h1 className="text-center">My items</h1>
      <MyCardList items={approved}></MyCardList>
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
