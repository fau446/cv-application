import { useState } from "react";
import GeneralSection from "../GeneralSection/GeneralSection";
import EducationSection from "../EducationSection/EducationSection";
import PracticalSection from "../PracticalSection/PracticalSection";
import styles from "./CVEditor.module.css";

// Tabs work, but it resets the input fields.
// might be better to keep the components hidden rather then not rendering them...

function CVEditor({
  onChange,
  onSubmit,
  addEducation,
  addPractical,
  educationInfo,
  practicalInfo,
  removeEducation,
  removePractical,
}) {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div>
      <div className={styles.tabs}>
        <h3 onClick={() => setActiveTab("General")}>General</h3>
        <h3 onClick={() => setActiveTab("Education")}>Education</h3>
        <h3 onClick={() => setActiveTab("Work")}>Work</h3>
      </div>
      <form onSubmit={onSubmit}>
        {activeTab === "General" ? (
          <GeneralSection onChange={onChange} className="normal" />
        ) : (
          <GeneralSection onChange={onChange} className="hidden" />
        )}
        {activeTab === "Education" ? (
          <EducationSection
            onChange={onChange}
            addEducation={addEducation}
            educationInfo={educationInfo}
            removeEducation={removeEducation}
            className="normal"
          />
        ) : (
          <EducationSection
            onChange={onChange}
            addEducation={addEducation}
            educationInfo={educationInfo}
            removeEducation={removeEducation}
            className="hidden"
          />
        )}
        {activeTab === "Work" ? (
          <PracticalSection
            onChange={onChange}
            addPractical={addPractical}
            practicalInfo={practicalInfo}
            removePractical={removePractical}
            className="normal"
          />
        ) : (
          <PracticalSection
            onChange={onChange}
            addPractical={addPractical}
            practicalInfo={practicalInfo}
            removePractical={removePractical}
            className="hidden"
          />
        )}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default CVEditor;
