import express from 'express';

const homeRouter = express.Router();

homeRouter.get('/home', (req, res) => {
  res.send({ msg: 'Home page' });
});

export default homeRouter;
