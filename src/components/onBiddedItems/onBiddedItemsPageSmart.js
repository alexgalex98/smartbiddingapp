import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/onBiddedItemsActions";
import OnBiddedItemsCardList from "./onBiddedItemsCardList";

function OnBiddedItemsPageSmart({ onBiddedItems, fetchItems }) {
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
  return onBiddedItems.loading ? (
    <h1>Items are loading!!</h1>
  ) : onBiddedItems.error ? (
    <h1>ERROR{onBiddedItems.error}</h1>
  ) : (
    <div>
      <h1 className="text-center">Bidded on items</h1>
      <OnBiddedItemsCardList items={approved} />
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
