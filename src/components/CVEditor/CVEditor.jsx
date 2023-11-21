import GeneralSection from "../GeneralSection/GeneralSection";
import EducationSection from "../EducationSection/EducationSection";
import PracticalSection from "../PracticalSection/PracticalSection";

// Should be given a prop by App
function CVEditor({
  onChange,
  onSubmit,
  addEducation,
  addPractical,
  educationInfo,
  practicalInfo,
  removeEducation,
  removePractical,
}) {
  return (
    <form onSubmit={onSubmit}>
      <GeneralSection onChange={onChange} />
      <EducationSection
        onChange={onChange}
        addEducation={addEducation}
        educationInfo={educationInfo}
        removeEducation={removeEducation}
      />
      <PracticalSection
        onChange={onChange}
        addPractical={addPractical}
        practicalInfo={practicalInfo}
        removePractical={removePractical}
      />

      <button>Submit</button>
    </form>
  );
}

export default CVEditor;
