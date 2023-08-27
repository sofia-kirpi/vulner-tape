const Accordion = ({ vulnerability, index }) => {

  const { name, description } = vulnerability;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"heading" + index}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + index}
          aria-expanded="false"
          aria-controls={"collapse" + index}
        >
          ► {name}
        </button>
      </h2>
      <div
        id={"collapse" + index}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + index}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{description}</div>
      </div>
    </div>
  );
};

export default Accordion;
