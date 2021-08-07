import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../styles/SignIn.css";

const Register = ({
  name,
  email,
  password,
  onNameChange,
  onEmailChange,
  setPassword,
  onSubmit,
}) => {
  return (
    <div className="SignInbackg">
      <main className="pa4 black-80 maindiv">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="title">Sign Up</legend>
            <div className="form-group">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                placeholder="Enter Name"
                type="text"
                name="name"
                id="name"
                onChange={(e) => onNameChange(e.target.value)}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="form-control"
                placeholder="Enter email"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => onEmailChange(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                placeholder="Enter password"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmit}
              className="btn btn-primary btn-block submitbutton"
              type="submit"
              value="Sign up"
            />
          </div>
          <div className="lh-copy mt3">
            {/* {} LINK REGISTER  */}
            Do you already have an account?
            <Link to="/" className="link">
              {" "}
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
