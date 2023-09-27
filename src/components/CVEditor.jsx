// Should be given a prop by App
function CVEditor({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <GeneralSection onChange={onChange} />
      <EducationSection onChange={onChange} />

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

function EducationSection({ onChange }) {
  return (
    <>
      <h2>Education Information</h2>
      <CVField
        labelName="school"
        fieldName="School Name"
        dataType="text"
        onChange={onChange}
        name="school"
      />
      <CVField
        labelName="degree"
        fieldName="Degree"
        dataType="text"
        onChange={onChange}
        name="degree"
      />
      <CVField
        labelName="school-start-date"
        fieldName="Start Date"
        dataType="text"
        onChange={onChange}
        name="school-start-date"
      />
      <CVField
        labelName="school-end-date"
        fieldName="End Date"
        dataType="text"
        onChange={onChange}
        name="school-end-date"
      />
    </>
  );
}
/*
function PracticalSection() {
  return (
    <>
      <h2>Practical Information</h2>
      <CVField labelName="company" fieldName="Company Name" dataType="text" />
      <CVField
        labelName="position"
        fieldName="Position Title"
        dataType="text"
      />
      <CVField
        labelName="start-date-practical"
        fieldName="Start Date"
        dataType="date"
      />
      <CVField
        labelName="end-date-practical"
        fieldName="End Date"
        dataType="date"
      />
      <CVField labelName="location" fieldName="Location" dataType="text" />
    </>
  );
}
*/
function CVField({ labelName, fieldName, dataType, onChange, name }) {
  return (
    <>
      <label htmlFor={labelName}>{fieldName}</label>
      <input type={dataType} id={labelName} onChange={onChange} name={name} />
    </>
  );
}
export default CVEditor;
