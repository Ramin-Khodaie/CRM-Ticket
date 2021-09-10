import React, { useState } from "react";
import { Login } from "../components/Login";
import { ResetPass } from "../components/ResetPass";

export const Entry = () => {
  //state of email & password

  // state of toggle forms
  const [frmLogin, setFrmLogin] = useState("login");

  //handle the changes of textfields

  //function which do toggle between forms
  const frmSwicther = (frm) => {
    setFrmLogin(frm);
  };

  // submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.value) {
    }
  };
  //submit for change password
  const handleResetPassSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {frmLogin === "login" && (
        <Login onsubmit={handleSubmit} formSwitch={frmSwicther} />
      )}
      {/* {frmLogin === "reset" && (
        <ResetPass
          email={email}
          pass={password}
          handleOnsubmit={handleResetPassSubmit}
          formSwitch={frmSwicther}
        />
      )} */}
    </div>
  );
};
