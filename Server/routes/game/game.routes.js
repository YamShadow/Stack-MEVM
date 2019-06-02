/*
Imports
*/
const express = require("express");
const gameRouter = express.Router({
  mergeParams: true
});
const {
  getParties,
  postPartie,
} = require("./game.controller");
const {
  checkFields
} = require("../../services/request.checker");
const {
  sendBodyError,
  sendFieldsError,
  sendApiSuccessResponse,
  sendApiErrorResponse
} = require("../../services/server.response");

/*
Routes definition
*/
class GameRouterClass {
  routes() {
    // HATEOAS
    gameRouter.get("/", (req, res) => {
      const routes = {
        Route: {
          "/": "Liste des routes disponibles",
          "/parties": "CR des parties"
        }
      };
      res.json(routes);
    });


    // parties
    gameRouter.get("/parties", (req, res) => {

      const {
        miss,
        extra,
        ok
      } = checkFields([], req.body, true, req.headers);

      // Check oppropriated values
      if (!ok) {
        sendFieldsError(res, "Bad fields provided", miss, extra);
      }
      // Use controller function
      getParties(req.body)
        .then(apiResponse =>
          sendApiSuccessResponse(res, "Parties collected", apiResponse)
        )
        .catch(apiErr =>
          sendApiErrorResponse(res, "Parties not collected", apiErr)
        );
    });

    gameRouter.post("/parties", (req, res) => {
      // Check for body data
      if (typeof req.body === "undefined" || req.body === null)
        sendBodyError(res, "No body data provided");

      // Check for mandatories
      const {
        miss,
        extra,
        ok
      } = checkFields(["points"], req.body, true, req.headers);

      // Check oppropriated values
      if (!ok) {
        sendFieldsError(res, "Bad fields provided", miss, extra);
      }

      // Use controller function
      postPartie(req.body, req.headers)
        .then(apiResponse =>
          sendApiSuccessResponse(res, "Parties post", apiResponse)
        )
        .catch(apiErr =>
          sendApiErrorResponse(res, "Parties not post", apiErr)
        );
    });

  }

  init() {
    this.routes();
    return gameRouter;
  }
}

/*
Export
*/
module.exports = GameRouterClass;