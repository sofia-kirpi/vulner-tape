const getRandomInt = (max) => Math.floor(Math.random() * max);

const getCardColor = () => {
  const random = getRandomInt(2);
  switch (random) {
    case 0:
      return "bg-primary";
    case 1:
      return "bg-info";
    case 2:
      return "bg-info";
    default:
      return "bg-primary";
  }
};

const getTableColor = (result) => {
  switch (result) {
    case "passed":
      return "table-success";
    case "failed":
      return "table-danger";
    case "blocked":
      return "table-warning";
    case "not found":
      return "table-dark";
    default:
      return "table-primary";
  }
};

export { getCardColor, getTableColor };
