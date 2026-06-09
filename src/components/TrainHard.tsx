import "./Footer.scss";
import trainHard from "../assets/images/train-hard.webp";

export default function TrainHard() {
  return (
    <div className="train-hard">
      <img
        src={trainHard}
        className="train-hard-image"
        alt="Description of image"
      />
    </div>
  );
}
