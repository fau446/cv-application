import CVField from "../CVField/CVField";

function EducationSection({
  onChange,
  addEducation,
  educationInfo,
  removeEducation,
}) {
  return (
    <div>
      <h2>Education Information</h2>

      <div>
        {educationInfo.map((item) => (
          <div key={item.uniqueId}>
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
              type="button"
              onClick={removeEducation}
              data-id={item.uniqueId}
            >
              Remove School
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addEducation}>
        Add School
      </button>
    </div>
  );
}

export default EducationSection;