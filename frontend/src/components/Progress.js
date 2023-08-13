import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = ({ step1, step2, step3, step4 }) => {
  return (
    <ProgressBar
      animated
      now={step1 ? 25 : step2 ? 50 : step3 ? 75 : step4 ? 100 : 0}
    />
  );
};

export default Progress;
