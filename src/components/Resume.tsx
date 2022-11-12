import "../style/style.css";

export default function Resume() {
  return (
    <div className="resumeWrapper">
      <embed className="resume" src="../resume.pdf" type="application/pdf" />
    </div>
  );
}
