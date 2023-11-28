import styles from "./CVField.module.css";

function CVField({
  labelName,
  fieldName,
  dataType,
  onChange,
  name,
  dataid = "",
}) {
  return (
    <div className={styles.CVField}>
      <label htmlFor={labelName}>{fieldName}</label>
      <input
        className={styles.textInput}
        type={dataType}
        id={labelName}
        onChange={onChange}
        name={name}
        data-id={dataid}
      />
    </div>
  );
}

export default CVField;
