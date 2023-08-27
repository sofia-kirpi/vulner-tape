import Table from "./Table";

const SmallCard = ({ vulnerability }) => {
  const { name, description, data } = vulnerability;
  return (
    <div className="card bg-dark border-dark mt-4" style={{ maxWidth: "100%" }}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        <Table data={data}/>
      </div>
    </div>
  );
};

export default SmallCard;
