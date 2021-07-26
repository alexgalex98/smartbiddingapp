import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";

export const FormExample = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback type="invalid">
            Please provide a first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
          <Form.Control.Feedback type="invalid">
            Please provide a last name.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Container, Form } from "react-bootstrap";
// import { useState } from "react";

// const NewBid = ({
//   name,
//   category,
//   description,
//   condition,
//   startPrice,
//   buyNowPrice,
//   bidDuration,
//   setName,
//   onCategoryChange,
//   onDescriptionChange,
//   onConditionChange,
//   onStartPriceChange,
//   onBuyNowPriceChange,
//   onBidDurationChange,
//   onSubmit,
// }) => {
//   const [validated, setValidated] = useState(false);
//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
//   return (
//     <Container>
//       {/* {console.log("nume:", name, "cat:", category, "cond", condition)} */}
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <div class="form-row">
//           <div class="col-md-4 mb-3">
//             <label for="validationCustom01">Product name</label>
//             <input
//               type="text"
//               class="form-control"
//               id="validationCustom01"
//               placeholder="Product name"
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//             <div class="valid-feedback">Looks good!</div>
//           </div>
//           <div class="form-group col-md-3">
//             <label for="inputState">Category</label>
//             <select
//               id="inputState"
//               class="form-control"
//               onChange={(e) => onCategoryChange(e.target.value)}
//             >
//               <option selected>Choose...</option>
//               <option>Electronics</option>
//               <option>Fashion</option>
//               <option>Sports</option>
//               <option>Health & Beauty</option>
//               <option>Toys</option>
//               <option>Home & Garden</option>
//             </select>
//           </div>
//           <div class="col-md-4 mb-3">
//             <label for="validationCustom03">Description</label>
//             <input
//               type="text"
//               class="form-control"
//               id="validationCustom03"
//               placeholder="Description"
//               required
//               onChange={(e) => onDescriptionChange(e.target.value)}
//             />
//             <div class="invalid-feedback">Please provide a description.</div>
//           </div>
//         </div>
//         <div class="form-row">
//           <div class="form-group col-md-2 ">
//             <label for="inputState">Condition</label>
//             <select
//               id="inputState"
//               class="form-control"
//               onChange={(e) => onConditionChange(e.target.value)}
//             >
//               <option selected>Choose...</option>
//               <option>New</option>
//               <option>Used</option>
//             </select>
//           </div>
//           <div class="col-md-3 mb-2">
//             <label for="validationCustom04">Start Price</label>
//             <input
//               type="text"
//               class="form-control"
//               id="validationCustom04"
//               placeholder="Start Price"
//               required
//               onChange={(e) => onStartPriceChange(e.target.value)}
//             />
//             <div class="invalid-feedback">Please provide a valid price.</div>
//           </div>
//           <div class="col-md-3 mb-2">
//             <label for="validationCustom04">Buy Now Price</label>
//             <input
//               type="text"
//               class="form-control"
//               id="validationCustom04"
//               placeholder="Buy Now Price"
//               required
//               onChange={(e) => onBuyNowPriceChange(e.target.value)}
//             />
//             <div class="invalid-feedback">Please provide a valid price.</div>
//           </div>
//           <div class="col-md-3 mb-2">
//             <label for="validationCustom04">Bid duration</label>
//             <input
//               type="text"
//               class="form-control"
//               id="validationCustom04"
//               placeholder="Bid duration"
//               required
//               onChange={(e) => onBidDurationChange(e.target.value)}
//             />
//             <div class="invalid-feedback">
//               Please provide a valid number of seconds.
//             </div>
//           </div>
//         </div>

//         <button class="btn btn-primary" type="submit" onClick={onSubmit}>
//           Submit form
//         </button>
//       </Form>
//     </Container>
//   );
// };

// export default NewBid;
