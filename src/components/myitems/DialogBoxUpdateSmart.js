import React, { useEffect, useState } from "react";
import DialogBox from "./DialogBoxUpdate";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/ItemsActions";
import {} from "../../actions/updateItemActions";
import DialogBoxUpdate from "./DialogBoxUpdate";
import {
  updateItemFailure,
  updateItemLoading,
  updateItemRequest,
  updateItemSuccess,
} from "../../actions/updateItemActions";
import { useHistory } from "react-router-dom";

const DialogBoxUpdateSmart = ({
  prodName,
  description,
  image,
  category,
  startprice,
  buynowprice,
  condition,
  bidduration,
  open,
  handleToClose,
  id,
  isSuccess,
  updateData,
  success,
  updateItemRequest,
}) => {
  const [id_, setId] = useState(id);
  const [name, setName] = useState(prodName);
  const [category_, setCategory] = useState(category);
  const [description_, setDescription] = useState(description);
  const [condition_, setCondition] = useState(condition);
  const [startPrice, setStartPrice] = useState(startprice);
  const [buyNowPrice, setBuyNowPrice] = useState(buynowprice);
  const [bidDuration, setBidDuration] = useState(bidduration);

  // const [open, setOpen] = React.useState(false);

  // setOpen(true);
  // const handleClickToOpen = () => {
  //   setOpen(true);
  // };
  const handleApprove = () => {
    //sa apelezi parte de approve
    window.location.reload(false);
    // approveItemRequest(id);
    handleToClose();
  };
  const handleDisapprove = () => {
    //disaprove request
    // disapproveItemRequest(id);
    handleToClose();
  };

  const onSubmit = async () => {
    updateItemRequest(
      id_,
      name,
      category_,
      description_,
      condition_,
      startPrice,
      buyNowPrice,
      bidDuration
    );
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("SUCCESS");
    }
  }, [isSuccess]);
  return (
    <div>
      <DialogBoxUpdate
        prodName={prodName}
        category={category}
        description={description}
        condition={condition}
        startprice={startprice}
        buynowprice={buynowprice}
        bidduration={bidduration}
        image={image}
        setName={setName}
        setCategory={setCategory}
        setDescription={setDescription}
        setCondition={setCondition}
        setStartPrice={setStartPrice}
        setBuyNowPrice={setBuyNowPrice}
        setBidDuration={setBidDuration}
        open={open}
        handleApprove={handleApprove}
        handleClose={handleToClose}
        handleDisapprove={handleDisapprove}
        id={id}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    updateData: state.updateItem,
    isSuccess: state.updateItem.isSuccess,
    success: state.updateItem.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItemRequest: (
      id,
      name,
      category_,
      description_,
      condition_,
      startPrice,
      buyNowPrice,
      bidDuration
    ) =>
      dispatch(
        updateItemRequest(
          id,
          name,
          category_,
          description_,
          condition_,
          startPrice,
          buyNowPrice,
          bidDuration
        )
      ),
    updateItemSuccess: (success) => dispatch(updateItemSuccess(success)),
    updateItemFailure: (error) => dispatch(updateItemFailure(error)),
    updateItemLoading: (loading) => dispatch(updateItemLoading(loading)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogBoxUpdateSmart);
