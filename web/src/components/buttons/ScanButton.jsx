import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const ScanButton = ({onClick, disabled}) => {
  return (
    <button
      className="btn btn-outline-primary"
      title="Search"
      style={{ marginLeft: "12px" }}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={faRobot} />
    </button>
  );
};

export default ScanButton;
