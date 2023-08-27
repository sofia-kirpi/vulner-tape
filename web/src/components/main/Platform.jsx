import Accordion from "./Accordion";
import { getCardColor } from "../../helpers/color";

const Platform = ({ data, platformIndex }) => {
  const { platform, vulnerabilities } = data;
  const { name, description } = platform;
  const style = getCardColor() + " card mt-4";

  return (
    <div className={style} style={{ maxWidth: "100%" }}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        <div className="accordion" id="accordionExample">
          {vulnerabilities.map((vulnerability, index) => (
            <Accordion key={index} vulnerability={vulnerability} index={`${platformIndex}.${index}`}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
