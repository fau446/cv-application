import CVField from "../CVField/CVField";

function PracticalSection({
  onChange,
  addPractical,
  practicalInfo,
  removePractical,
}) {
  return (
    <div>
      <h2>Practical Information</h2>
      <div>
        {practicalInfo.map((item) => (
          <div key={item.uniqueId}>
            <CVField
              labelName="company"
              fieldName="Company Name"
              dataType="text"
              onChange={onChange}
              name="company"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="position"
              fieldName="Position Title"
              dataType="text"
              onChange={onChange}
              name="position"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="start-date-practical"
              fieldName="Start Date"
              dataType="text"
              onChange={onChange}
              name="start-date-practical"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="end-date-practical"
              fieldName="End Date"
              dataType="text"
              onChange={onChange}
              name="end-date-practical"
              dataid={item.uniqueId}
            />
            <CVField
              labelName="location"
              fieldName="Location"
              dataType="text"
              onChange={onChange}
              name="location"
              dataid={item.uniqueId}
            />
            <button
              type="button"
              onClick={removePractical}
              data-id={item.uniqueId}
            >
              Remove Work
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addPractical}>
        Add Work
      </button>
    </div>
  );
}

export default PracticalSection;