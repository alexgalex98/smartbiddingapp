import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const DialogBox = ({
  prodName,
  description,
  image,
  id,
  open,
  handleApprove,
  handleClose,
  handleDisapprove,
}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{prodName}</DialogContentText>
          <h3>{description}</h3>
          <img src={image} alt=""></img>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApprove} color="primary" autoFocus>
            Approve
          </Button>
          <Button onClick={handleDisapprove} color="primary" autoFocus>
            Disapprove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
