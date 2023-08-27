exports.clean = (headers) => {
  for (const header in headers) {
    const temp = headers[header];
    const clearHeader = header.toLowerCase();
    headers[clearHeader] = temp;
  }
  return headers;
};
