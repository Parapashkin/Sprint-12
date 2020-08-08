const usersRouter = require('express').Router();
const path = require('path');
const fs = require('fs').promises;
// const users = require('../data/users');
const filepath = path.join(__dirname, '../data/users.json');

usersRouter.get('/', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      if (!users) {
        res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
      } else { res.send(users); }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

usersRouter.get('/:id', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' })
    .then((data) => JSON.parse(data).find((user) => user.id === req.params.id))
    .then((data) => {
      if (data) {
        res.send(data);
        return;
      }
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = usersRouter;
