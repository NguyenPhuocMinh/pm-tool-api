module.exports = (req, res) => {
  console.info('req', req);
  res.status(404).json({ message: 'Handler Alo' });
};
