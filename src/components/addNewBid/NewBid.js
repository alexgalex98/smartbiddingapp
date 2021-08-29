import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Form, Row, InputGroup, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import DateTimePicker from "@material-ui/lab/DateTimePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import "../../styles/NewBid.css";
import { FaSave } from "react-icons/fa";
// import ToastDemo from "./ToastDemo";
import { Toast } from "react-bootstrap";

const NewBid = ({
  name,
  category,
  description,
  condition,
  startPrice,
  buyNowPrice,
  bidDuration,
  image,
  setName,
  onCategoryChange,
  onDescriptionChange,
  onConditionChange,
  onStartPriceChange,
  onBuyNowPriceChange,
  onBidDurationChange,
  onImageChange,
  onSubmit,
  dateChange,
  setDateChange,
}) => {
  const [validated, setValidated] = useState(false);
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [path, sethPath] = useState("testImage");
  const style = {
    zIndex: 100,
  };
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const onChangeDate = () => {
    console.log(dateChange);
  };

  const onSubmitImage = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      sethPath(filePath);
      setUploadedFile({ fileName, filePath });
      console.log(fileName, filePath);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.dat.msg);
      }
    }
    //handleSubmit();
  };

  const [value, onChangeValue] = useState(new Date());
  const [currentDate] = useState(new Date());

  console.log(currentDate, "NOW", dateChange, "CHANGE");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    onImageChange(`images/${e.target.files[0].name}`);
  };
  let time = 0;

  const handleSubmit = (event) => {
    console.log("1");
    const form = event.currentTarget;
    const formData = new FormData();
    formData.append("file", file);
    console.log(filename);
    // onImageChange("path");
    time = Math.round((dateChange.getTime() - currentDate.getTime()) / 1000);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log(filename);
      console.log(
        "DIFFERENCE=",
        (dateChange.getTime() - currentDate.getTime()) / 1000
      );
      console.log(
        Math.round((dateChange.getTime() - currentDate.getTime()) / 1000)
      );
    } else {
      try {
        onSubmitImage();
        console.log("2");

        onSubmit();
        toggleShowA();
      } catch {
        console.log("err");
      }
    }
    setValidated(true);
  };

  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* {console.log("nume:", name, "cat:", category, "cond", condition)} */}
          <Row className="mb-3 firstRow">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an product name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Category</Form.Label>
              <select
                class="custom-select"
                required
                onChange={(e) => onCategoryChange(e.target.value)}
              >
                <option label="Choose category"></option>
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
            <Form.Group as={Col} md="5" controlId="validationCustom03">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={1}
                placeholder="Description"
                onChange={(e) => onDescriptionChange(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please input a description.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="validationCustom04">
              <Form.Label>Condition</Form.Label>
              <select
                class="custom-select"
                required
                onChange={(e) => onConditionChange(e.target.value)}
              >
                <option label="Choose condition"></option>
                <option>New</option>
                <option>Used</option>
              </select>
              <Form.Control.Feedback type="invalid">
                Please pick a condition.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom05">
              <Form.Label>Start Price ($)</Form.Label>
              <Form.Control
                min="1"
                required
                type="number"
                placeholder="0"
                onChange={(e) => onStartPriceChange(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide the start price.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom06">
              <Form.Label>Buy Now Price ($)</Form.Label>
              <Form.Control
                min="2"
                required
                type="number"
                placeholder="0"
                onChange={(e) => onBuyNowPriceChange(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide the buy now price.
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="2" controlId="validationCustom07">
            <Form.Label>Bid Duration (s)</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="0"
              onChange={(e) => onBidDurationChange(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide the time in seconds.
            </Form.Control.Feedback>
          </Form.Group> */}

            <Form.Group as={Col} md="3">
              <Form.Label className="pickTimeText">Pick Time</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  className="formDatePicker"
                  renderInput={(props) => <TextField {...props} />}
                  //label="Pick Date & Time"
                  value={dateChange}
                  minDateTime={new Date()}
                  onChange={(newValue) => {
                    setDateChange(newValue);
                    onChangeDate();
                    // console.log(dateChange, "DATECHANGE");
                    // console.log(
                    //   Math.round(
                    //     (dateChange.getTime() - currentDate.getTime()) / 1000
                    //   )
                    // );
                    // onBidDurationChange(
                    //   (dateChange.getTime() - currentDate.getTime()) / 1000
                    // );
                    // console.log(
                    //   dateChange.getTime() - currentDate.getTime() / 1000,
                    //   "IN ONCHANE"
                    // );
                    // console.log(dateChange, currentDate, "bllblbll");
                  }}
                />
              </LocalizationProvider>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom07">
              <Form.Label>Image</Form.Label>
              <div className="custom-file mb-2">
                <input
                  required
                  className="custom-file-input"
                  type="file"
                  id="customFile"
                  onChange={onChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
              </div>
            </Form.Group>
          </Row>
          <Button type="submit" className="btnAdd btn-1  icon-info">
            <span class="btn-label">
              <FaSave className="btn-sep"></FaSave>
            </span>
            Submit form
          </Button>
        </Form>
      </Container>

      <Row className="addToast">
        <Col xs={6}>
          <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Add Successful</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body>The Item was added successfully</Toast.Body>
          </Toast>
        </Col>
        {/* <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col> */}
      </Row>
    </div>
  );
};

export default NewBid;
