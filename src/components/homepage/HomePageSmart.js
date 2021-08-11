import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLastItems } from "../../actions/lastItemsActions";
import { fetchMostPopularItems } from "../../actions/homePageActions";
import TopItemsTabs from "./TopItemsTabs";

function HomePageSmart({
  lastItems,
  fetchLastItems,
  mostPopularItems,
  fetchMostPopularItems,
}) {
  useEffect(() => {
    fetchLastItems();
    fetchMostPopularItems();
  }, [fetchLastItems, fetchMostPopularItems]);

  console.log("APPROVED", lastItems.lastItems);
  return lastItems.loading ? (
    <h2>Loading</h2>
  ) : lastItems.error || mostPopularItems.error ? (
    <h2>HELLO{lastItems.error}</h2>
  ) : (
    <div>
      {console.log(lastItems, "ITMEMEEE")}
      {console.log(mostPopularItems, "POPULARER")}

      <TopItemsTabs
        lastItems={lastItems.lastItems}
        mostPopularItems={mostPopularItems.mostPopularItems}
      ></TopItemsTabs>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lastItems: state.lastItems,
    mostPopularItems: state.mostPopularItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLastItems: () => dispatch(fetchLastItems()),
    fetchMostPopularItems: () => dispatch(fetchMostPopularItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageSmart);
