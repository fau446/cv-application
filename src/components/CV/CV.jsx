import styles from "./CV.module.css";

function CV({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <div className={styles.cv}>
      <div className={styles.generalSection}>
        <p className={styles.name}>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
        <p>{generalInfo.address}</p>
      </div>
      <div className={styles.educationSection}>
        <h2 className={styles.header}>Education</h2>
        {educationInfo.map((item) => (
          <div key={item.uniqueId} className={styles.entry}>
            <div className={styles.top}>
              <p className={styles.bold}>{item.schoolName}</p>
              <div className={styles.date}>
                <p className={styles.bold}>{item.startDate}</p>
                {item.startDate && item.endDate && (
                  <p className={styles.bold}>-</p>
                )}
                <p className={styles.bold}>{item.endDate}</p>
              </div>
            </div>
            <p>{item.degree}</p>
          </div>
        ))}
      </div>
      <div className={styles.practicalSection}>
        <h2 className={styles.header}>Work Experience</h2>
        {practicalInfo.map((item) => (
          <div key={item.uniqueId}>
            <div className={styles.top}>
              <p className={styles.bold}>{item.company}</p>
              <div className={styles.date}>
                <p className={styles.bold}>{item.startDate}</p>
                {item.startDate && item.endDate && (
                  <p className={styles.bold}>-</p>
                )}
                <p className={styles.bold}>{item.endDate}</p>
              </div>
            </div>
            <p>{item.position}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
