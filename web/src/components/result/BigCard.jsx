import SmallCard from "./SmallCard";
import { getCardColor } from "../../helpers/color";

const BigCard = ({ platform }) => {
  const { name, description, data } = platform;
  const style = getCardColor() + " card mt-4";

  return (
    <div className={style} style={{ maxWidth: "100%" }}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        {data.map((vulnerability, index) => (
          <SmallCard key={index} vulnerability={vulnerability} />
        ))}
      </div>
    </div>
  );
};

export default BigCard;
