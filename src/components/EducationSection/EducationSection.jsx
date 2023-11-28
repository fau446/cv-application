import CVField from "../CVField/CVField";
import styles from "../../styles/SectionStyling.module.css";

function EducationSection({
  onChange,
  addEducation,
  educationInfo,
  removeEducation,
  className,
}) {
  return (
    <div className={className}>
      <h2 className={styles.formHeader}>Education Information</h2>
      <div className={styles.forms}>
        {educationInfo.map((item) => (
          <div className={styles.form} key={item.uniqueId}>
            <CVField
              labelName="school"
              fieldName="School Name"
              dataType="text"
              onChange={onChange}
              name="school"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="degree"
              fieldName="Degree"
              dataType="text"
              onChange={onChange}
              name="degree"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="school-start-date"
              fieldName="Start Date"
              dataType="text"
              onChange={onChange}
              name="school-start-date"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="school-end-date"
              fieldName="End Date"
              dataType="text"
              onChange={onChange}
              name="school-end-date"
              dataid={item.uniqueId}
            />
            <button
              className={styles.removeButton}
              type="button"
              onClick={removeEducation}
              data-id={item.uniqueId}
            >
              Remove School
            </button>
          </div>
        ))}
      </div>
      <button className={styles.addButton} type="button" onClick={addEducation}>
        Add School
      </button>
    </div>
  );
}

export default EducationSection;
