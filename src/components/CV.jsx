function CV({ value = "", generalInfo }) {
  return (
    <>
      <h2>{value}</h2>
      <p>{generalInfo.name}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.address}</p>
    </>
  );
}

export default CV;
