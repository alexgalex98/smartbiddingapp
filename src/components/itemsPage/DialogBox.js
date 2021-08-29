import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { FaCheck, FaTimes } from "react-icons/fa";

const DialogBox = ({
  prodName,
  description,
  startPrice,
  image,
  id,
  open,
  buyNowPrice,
  category,
  handleApprove,
  handleClose,
  handleDisapprove,
}) => {
  var sectionStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={700}
        className="dialogAdmin"
      >
        {/* <DialogTitle>{"Item"}</DialogTitle> */}
        <DialogContent className="adminDialogContent">
          <div class="d-flex main-content">
            <div class="bg-image promo-img mr-3">
              <img
                src={image}
                alt="Product image"
                className="adminDialogImage"
              ></img>
              {/* <span class="price">$2000</span> */}
              <div className="card-adgeAdmin">
                <p className="badgetext">NEW</p>
              </div>
            </div>
            <div class="textContentAdminDialog">
              <div class="">
                <a href="#" class="share">
                  <span class="icon-share"></span>
                </a>
                <h3 class="mb-3 line">{prodName}</h3>
                <p className="">{category}</p>
                <table>
                  <tr>
                    {/* <th className="detailrow">
                      <strong className="textPrice"> Start Price</strong>
                    </th>
                    <td className="detailrow startprice">${bid.startprice}</td> */}
                  </tr>
                  <tr>
                    <th className="detailrow adminTable">
                      <strong className="textPrice"> Current Bid</strong>
                    </th>
                    <td className="detailrow startprice">${startPrice}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25 detailrow adminTable" scope="row">
                      <strong className="textPrice">Buy Now Price</strong>
                    </th>
                    <td className="detailrow buynowprice"> ${buyNowPrice}</td>
                  </tr>
                  <tr>
                    {/* <th className="pl-0 w-25 detailrow" scope="row">
                      <strong className="textPrice">Description</strong>
                    </th>
                    <td className="detailrow">{bid.description}</td> */}
                  </tr>
                  {/* <tr>
                  <th>{bid.category}</th>
                </tr> */}
                </table>

                <p class="mb-5 descriptionDialog">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </p>
              </div>
            </div>
          </div>

          {/* <DialogContentText>{prodName}</DialogContentText>
          <h3>{description}</h3>
          <img src={image} alt=""></img>*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApprove} className="approve" autoFocus>
            <FaCheck />
            Approve
          </Button>
          <Button onClick={handleDisapprove} className="disapprove" autoFocus>
            <FaTimes />
            Disapprove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
