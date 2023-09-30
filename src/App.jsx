import "./App.css";
import { useState } from "react";
import CVEditor from "./components/CVEditor";
import CV from "./components/CV";
import { v4 as uuidv4 } from "uuid";

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
      degree: "",
      startDate: "",
      endDate: "",
      uniqueId: uuidv4(),
    },
  ]);

  let name = generalInfo.name;
  let email = generalInfo.email;
  let phone = generalInfo.phone;
  let address = generalInfo.address;

  let newEducationInfo = educationInfo;

  function handleChange(e) {
    switch (
      e.target.name // for GeneralSection
    ) {
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

    // for EducationSection
    for (let i = 0; i < newEducationInfo.length; i++) {
      if (e.target.dataset.id === newEducationInfo[i].uniqueId) {
        // console.log("Same ID!");
        // console.log(e.target.name);
        switch (e.target.name) {
          case "school":
            newEducationInfo[i].schoolName = e.target.value;
            break;
          case "degree":
            newEducationInfo[i].degree = e.target.value;
            break;
          case "school-start-date":
            newEducationInfo[i].startDate = e.target.value;
            break;
          case "school-end-date":
            newEducationInfo[i].endDate = e.target.value;
            break;
        }
        break;
      }
    }

    // setEducationInfo(newEducationInfo);

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

    setEducationInfo(newEducationInfo);
  }

  function addEducation() {
    const newItem = {
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      uniqueId: uuidv4(),
    };
    newEducationInfo = [...educationInfo, newItem];
    console.log("Tets");
    console.log(newEducationInfo);
    setEducationInfo(newEducationInfo);
    // console.log(educationInfo[0]);
    // console.log(educationInfo[1]);
  }

  return (
    <>
      <CVEditor
        onChange={handleChange}
        onSubmit={submitForm}
        addEducation={addEducation}
        educationInfo={educationInfo}
      />
      <CV generalInfo={generalInfo} educationInfo={educationInfo} />
    </>
  );
}

export default App;
