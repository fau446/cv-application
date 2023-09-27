import "./App.css";
import { useState } from "react";
import CVEditor from "./components/CVEditor";
import CV from "./components/CV";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      schoolName: "",
      major: "",
      startDate: "",
      endDate: "",
    },
  ]);

  let name = "";
  let email = "";
  let phone = "";
  let address = "";

  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        name = e.target.value;
        break;
      case "email":
        email = e.target.value;
        break;
      case "phone":
        phone = e.target.value;
        break;
      case "address":
        address = e.target.value;
        break;
    }

    e.preventDefault();
  }

  function submitForm(e) {
    e.preventDefault();
    setGeneralInfo({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
  }

  return (
    <>
      <CVEditor onChange={handleChange} onSubmit={submitForm} />
      <CV generalInfo={generalInfo} />
    </>
  );
}

export default App;
