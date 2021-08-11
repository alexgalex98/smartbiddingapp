import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSimilarItems } from "../../actions/homePageActions";
import { fetchLastItems } from "../../actions/lastItemsActions";
import { fetchWonItems } from "../../actions/wonItemsAction";
import WonCardList from "../wonItems/wonCardlist";

function WonItemsPageSmart({
  lastItems,
  fetchLastItems,
  wonItems,
  fetchWonItems,
}) {
  useEffect(() => {
    fetchWonItems();
    // fetchLastItems();
  }, [fetchWonItems]);

  console.log("SMARTTMY");
  console.log(wonItems, "IREE");
  return wonItems.loading ? (
    <h1>Items are loading!!</h1>
  ) : wonItems.error ? (
    <h1>ERROR{wonItems.error}</h1>
  ) : (
    <div>
      <h1 className="text-center">My items</h1>
      <WonCardList items={wonItems.wonItems}></WonCardList>
      {/* <WonCardList items={lastItems.lastItems}></WonCardList> */}
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
