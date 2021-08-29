import React, { useEffect } from "react";
import DialogBox from "./DialogBox";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/ItemsActions";
import {
  approveItemFailure,
  approveItemLoading,
  approveItemRequest,
  approveItemSuccess,
  disapproveItemFailure,
  disapproveItemLoading,
  disapproveItemRequest,
  disapproveItemSuccess,
} from "../../actions/approveItemActions";

const DialogBoxSmart = ({
  prodName,
  description,
  image,
  open,
  handleToClose,
  id,
  approveItemRequest,
  startPrice,
  category,
  buyNowPrice,
  approveItemLoading,
  approveItemFailure,
  approveItemSuccess,
  disapproveItemRequest,
  disapproveItemLoading,
  disapproveItemFailure,
  disapproveItemSuccess,
}) => {
  // const [open, setOpen] = React.useState(false);

  // setOpen(true);
  // const handleClickToOpen = () => {
  //   setOpen(true);
  // };
  const handleApprove = () => {
    //sa apelezi parte de approve
    window.location.reload(false);
    approveItemRequest(id);
    handleToClose();
  };
  const handleDisapprove = () => {
    //disaprove request
    disapproveItemRequest(id);
    handleToClose();
  };
  return (
    <div>
      <DialogBox
        prodName={prodName}
        description={description}
        image={image}
        open={open}
        handleApprove={handleApprove}
        handleClose={handleToClose}
        handleDisapprove={handleDisapprove}
        startPrice={startPrice}
        category={category}
        buyNowPrice={buyNowPrice}
        id={id}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    approveData: state.approveItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    approveItemRequest: (id) => dispatch(approveItemRequest(id)),
    approveItemLoading: (loading) => dispatch(approveItemLoading(loading)),
    approveItemFailure: (error) => dispatch(approveItemFailure(error)),
    approveItemSuccess: (id) => dispatch(approveItemSuccess(id)),
    disapproveItemRequest: (id) => dispatch(disapproveItemRequest(id)),
    disapproveItemLoading: (loading) =>
      dispatch(disapproveItemLoading(loading)),
    disapproveItemFailure: (error) => dispatch(disapproveItemFailure(error)),
    disapproveItemSuccess: (id) => dispatch(disapproveItemSuccess(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBoxSmart);
