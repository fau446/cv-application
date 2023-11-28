import CVField from "../CVField/CVField";
import styles from "../../styles/SectionStyling.module.css";

function GeneralSection({ onChange, className }) {
  return (
    <div className={className}>
      <h2 className={styles.formHeader}>General Information</h2>
      <div className={styles.form}>
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
    </div>
  );
}

export default GeneralSection;
