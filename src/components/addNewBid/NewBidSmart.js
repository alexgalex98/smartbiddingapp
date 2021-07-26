import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  newBidReq,
  newBidLoading,
  newBidError,
  newBidSucces,
} from "../../actions/NewBidActions";
import { useHistory } from "react-router-dom";
import NewBid from "./NewBid";

function NewBidSmart({ newBidData, newBidReq, succes, isSuccess }) {
  const [name, setName] = useState("cafea");
  const [category, setCategory] = useState("home");
  const [description, setDescription] = useState("blalalal");
  const [condition, setCondition] = useState("new");
  const [startPrice, setStartPrice] = useState(300);
  const [buyNowPrice, setBuyNowPrice] = useState(1000);
  const [bidDuration, setBidDuration] = useState(1000);
  const [image, setImage] = useState("hh");
  const created_by = localStorage.getItem("user");
  const history = useHistory();

  const onNameChange = (event) => {
    setName(event);
  };
  const onCategoryChange = (event) => {
    setCategory(event);
  };
  const onDescriptionChange = (event) => {
    setDescription(event);
  };
  const onConditionChange = (event) => {
    setCondition(event);
  };
  const onStartPriceChange = (event) => {
    setStartPrice(event);
  };
  const onBuyNowPriceChange = (event) => {
    setBuyNowPrice(event);
  };
  const onBidDurationChange = (event) => {
    console.log("bidd druation ", event);
    setBidDuration(event);
    console.log("bid duration 2", bidDuration);
  };

  const onImageChange = (event) => {
    console.log("imageOn Change ", event);
    setImage(event);
    console.log("imageOn Change 2", image);
  };

  const onSubmit = async () => {
    newBidReq(
      name,
      category,
      description,
      condition,
      startPrice,
      buyNowPrice,
      bidDuration,
      image,
      created_by
    );
    if (newBidData.loading) {
      console.log("loadingggggg");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("SUCEEESSS");
      history.push("/items");
      // console.log('SUCEEESSS')
    }
  }, [isSuccess]);

  return (
    <NewBid
      name={name}
      category={category}
      description={description}
      condition={condition}
      startPrice={startPrice}
      buyNowPrice={buyNowPrice}
      bidDuration={bidDuration}
      image={image}
      created_by={created_by}
      setName={setName}
      onCategoryChange={onCategoryChange}
      onDescriptionChange={onDescriptionChange}
      onConditionChange={onConditionChange}
      onStartPriceChange={onStartPriceChange}
      onBuyNowPriceChange={onBuyNowPriceChange}
      onBidDurationChange={onBidDurationChange}
      onImageChange={onImageChange}
      onSubmit={onSubmit}
    ></NewBid>
  );
}

const mapStateToProps = (state) => {
  return {
    newBidData: state.newBid,
    succes: state.newBid.succes,
    isSuccess: state.newBid.isSuccess,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    newBidReq: (
      name,
      category,
      description,
      condition,
      startPrice,
      buyNowPrice,
      bidDuration,
      image,
      created_by
    ) =>
      dispatch(
        newBidReq(
          name,
          category,
          description,
          condition,
          startPrice,
          buyNowPrice,
          bidDuration,
          image,
          created_by
        )
      ),
    newBidSucces: (success) => dispatch(newBidSucces(success)),
    newBidError: (error) => dispatch(newBidError(error)),
    newBidLoading: (loading) => dispatch(newBidLoading(loading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBidSmart);
