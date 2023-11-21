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

export default CVField;