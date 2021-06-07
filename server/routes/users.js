const express = require('express');
const router = express.Router();
const { getPlaylistsByUsers } = require('../helpers/dataHelpers');

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPlaylists }) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post('/', (req, res) => {
    const { username, email, password } = req.body;

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists',
          });
        } else {
          return addUser(username, email, password);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  /* GET playlists for a user */
  router.get('/:id/playlists', (req, res) => {
    // Currently this gets all the playlists for user 1 hardcoded
    getUsersPlaylists(1)
      .then((usersPlaylists) => {
        const formattedPlaylists = getPlaylistsByUsers(usersPlaylists);
        res.json(formattedPlaylists);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  /* GET songs for a user */
  router.get('/:id/songs', (req, res) => {
    // Currently this gets all the songs for all the users
    getUsersSongs()
      .then((usersSongs) => {
        const formattedSongs = getSongsByUsers(usersSongs);
        res.json(formattedSongs);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
