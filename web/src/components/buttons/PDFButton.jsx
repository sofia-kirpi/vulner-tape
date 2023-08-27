import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const PDFButton = ({ disabled }) => {
  return (
    <button
      className="btn btn-outline-primary"
      title="Search"
      style={{ marginLeft: "12px" }}
      disabled={disabled}
      id="download"
    >
      <FontAwesomeIcon icon={faFile} />
    </button>
  );
};

export default PDFButton;
