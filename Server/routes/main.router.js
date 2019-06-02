/*
Imports
*/
// NodeJS
const {
    Router
} = require("express");

// Inner
const AuthRouterClass = require("./auth/auth.routes");
const GameRouterClass = require("./game/game.routes");

/*
Define routers
*/
// Parent
const mainRouter = Router({
    mergeParams: true
});
const apiRouter = Router({
    mergeParams: true
});

// Child
const authRouter = new AuthRouterClass();
const gameRouter = new GameRouterClass();

/*
Define routes
*/
mainRouter.use("/api", apiRouter);
apiRouter.use("/auth", authRouter.init());
apiRouter.use("/game", gameRouter.init());

/*
Export
*/
module.exports = {
    mainRouter
};