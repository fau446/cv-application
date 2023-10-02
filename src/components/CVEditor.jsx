// Should be given a prop by App
function CVEditor({
  onChange,
  onSubmit,
  addEducation,
  addPractical,
  educationInfo,
  practicalInfo,
}) {
  return (
    <form onSubmit={onSubmit}>
      <GeneralSection onChange={onChange} />
      <EducationSection
        onChange={onChange}
        addEducation={addEducation}
        educationInfo={educationInfo}
      />
      <PracticalSection
        onChange={onChange}
        addPractical={addPractical}
        practicalInfo={practicalInfo}
      />

      <button>Submit</button>
    </form>
  );
}

function GeneralSection({ onChange }) {
  return (
    <>
      <h2>General Information</h2>
      <CVField
        labelName="name"
        fieldName="Name"
        dataType="text"
        onChange={onChange}
        name="name"
      />
      <CVField
        labelName="email"
        fieldName="Email"
        dataType="email"
        onChange={onChange}
        name="email"
      />
      <CVField
        labelName="phone"
        fieldName="Phone"
        dataType="tel"
        onChange={onChange}
        name="phone"
      />
      <CVField
        labelName="address"
        fieldName="Address"
        dataType="text"
        onChange={onChange}
        name="address"
      />
    </>
  );
}

function EducationSection({ onChange, addEducation, educationInfo }) {
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
          </div>
        ))}
      </div>
      <button type="button" onClick={addEducation}>
        Add School
      </button>
    </div>
  );
}

function PracticalSection({ onChange, addPractical, practicalInfo }) {
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
          </div>
        ))}
      </div>
      <button type="button" onClick={addPractical}>
        Add Work
      </button>
    </div>
  );
}

function CVField({
  labelName,
  fieldName,
  dataType,
  onChange,
  name,
  dataid = "",
}) {
  return (
    <>
      <label htmlFor={labelName}>{fieldName}</label>
      <input
        type={dataType}
        id={labelName}
        onChange={onChange}
        name={name}
        data-id={dataid}
      />
    </>
  );
}
export default CVEditor;
