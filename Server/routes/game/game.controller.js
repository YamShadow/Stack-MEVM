/*
Import
*/
const UserModel = require("../../models/user.model");
const GameModel = require("../../models/game.model");

/*
Functions
*/
const getParties = body => {
  return new Promise((resolve, reject) => {
    GameModel.find((error, parties) => {
      if (error) reject(error);
      else if (!parties) reject("parties not found");
      else {
        resolve({
          parties: parties
        });
      }
    });
  });
};

const postPartie = (body, header) => {
  return new Promise((resolve, reject) => {
    const user = new UserModel().getJwt(header.authorization.split(' ')[1]);

    const data = {
      points: body.points,
      date: new Date(),
      idUser: user._id
    };

    GameModel.create(data, (error, newPartie) => {
      if (error) {
        // Mongo error
        return reject(error);
      } else {
        // Partie saved
        return resolve(newPartie);
      }
    });
  });
};

//

/*
Export
*/
module.exports = {
  getParties,
  postPartie
};