import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  signInReq,
  signinSucces,
  signInError,
  signInLoading,
} from "../../actions/signInActions";
import SignIn from "./SignIn";
import { useHistory } from "react-router-dom";

function SignInSmart({ signInData, signInReq, success, isSuccess }) {
  const [email, setEmail] = useState("df");
  const [password, setPassword] = useState("jell");
  const history = useHistory();

  const onEmailChange = (event) => {
    setEmail(event);
    console.log(email);
    console.log(password);
  };
  const onTest = async () => {
    console.log(signInData);
  };
  const onSubmit = async () => {
    signInReq(password, email);
    if (signInData.loading) {
      console.log("hh");
    }
    console.log("SMART", signInData);
  };
  useEffect(() => {
    if (isSuccess) {
      if (success.is_admin) {
        console.log("ADMIN");
        history.push("/adminPage");
        localStorage.setItem("user", success.id);
        localStorage.setItem("isAuthenticated", "admin");
      } else {
        console.log("NU ADMIN");
        history.push("/home");
        console.log("SMARTYYY", success);
        localStorage.setItem("user", success.id);
        localStorage.setItem("isAuthenticated", "true");
        // refreshPage();
      }
    }

    console.log("hello");
  }, [isSuccess]);

  return (
    <SignIn
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      setPassword={setPassword}
      onSubmit={onSubmit}
    ></SignIn>
  );
}

const mapStateToProps = (state) => {
  return {
    signInData: state.signIn,
    success: state.signIn.success,
    isSuccess: state.signIn.isSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInReq: (password, email) => dispatch(signInReq(password, email)),
    signinSucces: (success) => dispatch(signinSucces(success)),
    signInError: (error) => dispatch(signInError(error)),
    signInLoading: (loading) => dispatch(signInLoading(loading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInSmart);
