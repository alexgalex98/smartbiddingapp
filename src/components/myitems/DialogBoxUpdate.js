import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import { Container, Form, Row, InputGroup, Col } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

const DialogBoxUpdate = ({
  prodName,
  category,
  description,
  condition,
  startprice,
  buynowprice,
  bidduration,
  image,
  id,
  open,
  handleApprove,
  handleClose,
  handleDisapprove,
  onSubmit,
  setName,
  setCategory,
  setDescription,
  setCondition,
  setStartPrice,
  setBuyNowPrice,
  setBidDuration,
}) => {
  console.log(startprice, "PRICE");
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth onSubmit={onSubmit}>
        <DialogTitle className="updateDialogTitle">Edit Item</DialogTitle>
        <DialogContent>
          <Form noValidate>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="validationCustom01">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product Name"
                  defaultValue={prodName}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an product name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustom02">
                <Form.Label>Category</Form.Label>
                <select
                  class="custom-select"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option label={category}></option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Sports</option>
                  <option>Health & Beauty</option>
                  <option>Toys</option>
                  <option>Home & Garden</option>
                </select>
                <Form.Control.Feedback type="invalid">
                  Please pick a category.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="validationCustom03">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={1}
                  placeholder="Description"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please input a description.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustom04">
                <Form.Label>Condition</Form.Label>
                <select
                  class="custom-select"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                >
                  <option label={condition}></option>
                  <option>New</option>
                  <option>Used</option>
                </select>
                <Form.Control.Feedback type="invalid">
                  Please pick a condition.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="5" controlId="validationCustom05">
                <Form.Label>Start Price ($)</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min="1"
                  placeholder="1"
                  defaultValue={startprice}
                  onChange={(e) => setStartPrice(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the start price.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustom06">
                <Form.Label>Buy Now Price ($)</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min="1"
                  placeholder="1"
                  defaultValue={buynowprice}
                  onChange={(e) => setBuyNowPrice(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the buy now price.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" className="btnEditSubmit btn-1">
              <span class="btn-label">
                <FaSave className="btn-sep"></FaSave>
              </span>
              Submit form
            </Button>
          </Form>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleApprove} color="primary" autoFocus>
            Approve
          </Button>
          <Button onClick={handleDisapprove} color="primary" autoFocus>
            Disapprove
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBoxUpdate;
