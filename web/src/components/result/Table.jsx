import { getTableColor } from "../../helpers/color";

const Table = ({ data }) => {
  if(!data[0]) data = [{result: "not found"}];
  const getStyle = (item) => getTableColor(item.result);

  return (
    <div className="bs-component">
      <table className="table table-hover">
        <thead>
          <tr>
            {Object.keys(data[0]).map((item) => (
              <th key={item} scope="col">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={getStyle(item)}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
