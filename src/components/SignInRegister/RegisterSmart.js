import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  registerReq,
  registerSucces,
  registerError,
  registerLoading,
} from "../../actions/registerActions";
import { useHistory } from "react-router-dom";
import Register from "./Register";

function RegisterSmart({ registerData, registerReq, success, isSuccess }) {
  const [name, setName] = useState("alex");
  const [email, setEmail] = useState("alex@");
  const [password, setPassword] = useState("jell");
  const history = useHistory();

  const onPasswordChange = (event) => {
    setPassword(event);
  };

  const onNameChange = (event) => {
    setName(event);
    console.log(name);
    console.log(email);
  };

  const onEmailChange = (event) => {
    setEmail(event);
    console.log(email);
    console.log(password);
  };
  const onTest = async () => {
    console.log(registerData);
  };
  const onSubmit = async () => {
    registerReq(name, email, password);
    console.log(name, email, password);
    if (registerData.loading) {
      console.log("hh");
    }
    console.log(registerData);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("ssssssss", success);
      localStorage.setItem("userReg", success.email);
      localStorage.setItem("user", success.id);
      localStorage.setItem("isAuthenticated", "true");
      history.push("/home");
      // refreshPage();
    }

    console.log("hello");
  }, [isSuccess]);

  return (
    <Register
      name={name}
      email={email}
      setPassword={onPasswordChange}
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onSubmit={onSubmit}
    ></Register>
  );
}

const mapStateToProps = (state) => {
  return {
    registerData: state.register,
    success: state.register.success,
    isSuccess: state.register.isSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerReq: (name, email, password) =>
      dispatch(registerReq(name, email, password)),
    registerSucces: (success) => dispatch(registerSucces(success)),
    registerError: (error) => dispatch(registerError(error)),
    registerLoading: (loading) => dispatch(registerLoading(loading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSmart);
