import { useState } from "react";
import GeneralSection from "../GeneralSection/GeneralSection";
import EducationSection from "../EducationSection/EducationSection";
import PracticalSection from "../PracticalSection/PracticalSection";
import styles from "./CVEditor.module.css";

function CVEditor({
  onChange,
  addEducation,
  addPractical,
  educationInfo,
  practicalInfo,
  removeEducation,
  removePractical,
}) {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className={styles.CVEditor}>
      <div className={styles.tabs}>
        <h3>
          {activeTab === "General" ? (
            <button
              className={styles.tabsButtonActive}
              onClick={() => setActiveTab("General")}
            >
              General
            </button>
          ) : (
            <button
              className={styles.tabsButton}
              onClick={() => setActiveTab("General")}
            >
              General
            </button>
          )}
        </h3>
        <h3>
          {activeTab === "Education" ? (
            <button
              className={styles.tabsButtonActive}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
          ) : (
            <button
              className={styles.tabsButton}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
          )}
        </h3>
        <h3>
          {activeTab === "Work" ? (
            <button
              className={styles.tabsButtonActive}
              onClick={() => setActiveTab("Work")}
            >
              Work
            </button>
          ) : (
            <button
              className={styles.tabsButton}
              onClick={() => setActiveTab("Work")}
            >
              Work
            </button>
          )}
        </h3>
      </div>
      <form className={styles.formSection}>
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
      </form>
    </div>
  );
}

export default CVEditor;
