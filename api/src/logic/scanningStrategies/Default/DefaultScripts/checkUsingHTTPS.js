exports.check = async (url) => {
  const protocol = url.match(/^https/g) ? "HTTPS" : "HTTP";
  const result = protocol === "HTTPS" ? "passed" : "failed";
  return [{protocol, result}];
};
