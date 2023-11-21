function CV({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <>
      <div>
        <h2>General Info</h2>
        <p>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
        <p>{generalInfo.address}</p>
      </div>
      <div>
        <h2>Education Info</h2>
        {educationInfo.map((item) => (
          <div key={item.uniqueId}>
            <p>{item.schoolName}</p>
            <p>{item.degree}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Practical Info</h2>
        {practicalInfo.map((item) => (
          <div key={item.uniqueId}>
            <p>{item.company}</p>
            <p>{item.position}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CV;