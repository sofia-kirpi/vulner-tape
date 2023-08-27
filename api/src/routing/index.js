const Router = require("express");

const scanner = require("../controllers/scanner");
const description = require("../controllers/description");

const routes = [
  { method: "post", path: "/api/scan", handler: scanner.scan },
  { method: "get", path: "/api/descriptions", handler: description.getList },
];

const router = new Router();
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

routes.forEach(({ method, path, handler }) =>
  router[method](
    path,
    handler.constructor.name === "AsyncFunction"
      ? asyncHandler(handler)
      : handler
  )
);

module.exports = router;
