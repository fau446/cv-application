import CVField from "../CVField/CVField";

function GeneralSection({ onChange, className }) {
  return (
    <div className={className}>
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
    </div>
  );
}

export default GeneralSection;
