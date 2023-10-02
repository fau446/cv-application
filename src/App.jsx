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

  const [practicalInfo, setPracticalInfo] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      uniqueId: uuidv4(),
    },
  ]);

  let name = generalInfo.name;
  let email = generalInfo.email;
  let phone = generalInfo.phone;
  let address = generalInfo.address;

  let newEducationInfo = educationInfo;
  let newPracticalInfo = practicalInfo;

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

    // for PracticalSection
    for (let i = 0; i < newPracticalInfo.length; i++) {
      if (e.target.dataset.id === newPracticalInfo[i].uniqueId) {
        switch (e.target.name) {
          case "company":
            newPracticalInfo[i].company = e.target.value;
            break;
          case "position":
            newPracticalInfo[i].position = e.target.value;
            break;
          case "start-date-practical":
            newPracticalInfo[i].startDate = e.target.value;
            break;
          case "end-date-practical":
            newPracticalInfo[i].endDate = e.target.value;
            break;
          case "location":
            newPracticalInfo[i].location = e.target.value;
            break;
        }
        break;
      }
    }

    e.preventDefault();
  }

  function setChange() {
    setGeneralInfo({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });

    setEducationInfo(newEducationInfo);
    setPracticalInfo(newPracticalInfo);
  }

  function submitForm(e) {
    e.preventDefault();
    setChange();
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
    setEducationInfo(newEducationInfo);
  }

  function addPractical() {
    const newItem = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      uniqueId: uuidv4(),
    };
    newPracticalInfo = [...practicalInfo, newItem];
    setPracticalInfo(newPracticalInfo);
  }

  function removeEducation(e) {
    for (let i = 0; i < newEducationInfo.length; i++) {
      if (e.target.dataset.id === newEducationInfo[i].uniqueId) {
        newEducationInfo.splice(i, 1);
        setChange();
      }
    }
  }

  function removePractical(e) {
    for (let i = 0; i < newPracticalInfo.length; i++) {
      if (e.target.dataset.id === newPracticalInfo[i].uniqueId) {
        newPracticalInfo.splice(i, 1);
        setChange();
      }
    }
  }

  return (
    <>
      <CVEditor
        onChange={handleChange}
        onSubmit={submitForm}
        addEducation={addEducation}
        addPractical={addPractical}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
        removeEducation={removeEducation}
        removePractical={removePractical}
      />
      <CV
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      />
    </>
  );
}

export default App;
