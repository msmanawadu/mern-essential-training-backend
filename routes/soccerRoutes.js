import {
  addNewPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayerById,
} from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players').post(addNewPlayer).get(getAllPlayers);

  app
    .route('/players/:playerId')
    .get(getPlayerById)
    .patch(updatePlayerById)
    .delete(deletePlayerById);
};

export default routes;
