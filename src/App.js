import * as React from "react";
import axios from "axios";

import "./App.scss";

const App = () => {
  const phoneRef = React.useRef();
  const ageRef = React.useRef();
  const pincodeRef = React.useRef();

  function isValid(length, entity) {
    switch (length) {
      case 10:
        var regx = /^[6-9]\d{9}$/;
        if (regx.test(entity)) {
          return true;
        }
        break;

      case 2:
        var regx = /^\d{2}$/;
        if (regx.test(entity)) {
          return true;
        }
        break;

      case 6:
        var regx = /^[8]\d{5}$/;
        if (regx.test(entity)) {
          return true;
        }
        break;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Submitting with ",
      phoneRef.current.value,
      ageRef.current.value,
      pincodeRef.current.value
    );

    if (!isValid(10, phoneRef.current.value)) {
      alert("Phone number is Invalid");
      return;
    }
    if (!isValid(2, ageRef.current.value)) {
      alert("Please enter valid age");
      return;
    }
    if (!isValid(6, pincodeRef.current.value)) {
      alert("Please enter valid pincode. Currently we only support Bihar");
      return;
    }
    const config = {
      method: "post",
      url: `https://cowinnotifierwa.herokuapp.com/user`,
      data: {
        phone: phoneRef.current.value,
        age: ageRef.current.value,
        pincode: pincodeRef.current.value,
      },
    };

    axios(config)
      .then(function (res) {
        if (res.status == 200) {
          phoneRef.current.value = "";
          ageRef.current.value = "";
          pincodeRef.current.value = "";
          if (res.data.status === "success") {
            alert(
              "Your Request has been submitted. We will notify you instantly for the slots"
            );
            return;
          } else if (res.data.message.indexOf("E11000") > -1) {
            alert("We already have your record. Stay safe! we will notify you");
            return;
          }
        }

        alert(
          `Your request didn't go through. We may be little overloaded. Please try again`
        );
        return;
      })
      .catch((e) => {
        alert(`Your request failed! we may be overloaded. Please try again`);
      });
  };

  return (
    <>
      <form>
        <h1>Get instant Alerts for Vaccination slots</h1>
        <input
          placeholder="Whatsapp Number"
          type="tel"
          maxLength="10"
          ref={phoneRef}
        ></input>
        <input
          placeholder="Age"
          type="tel"
          maxLength="2"
          minLength="2"
          ref={ageRef}
        ></input>
        <input
          placeholder="Pincode"
          type="tel"
          maxLength="6"
          ref={pincodeRef}
        ></input>
        <button onClick={handleSubmit}>Send</button>
      </form>

      <a href="https://twitter.com/manigedit" target="_blank">
        <i className="fa fa-twitter"></i>Follow Me
      </a>

      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400"
        rel="stylesheet"
        type="text/css"
      ></link>
    </>
  );
};

export default App;
