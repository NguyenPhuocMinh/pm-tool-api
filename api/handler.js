module.exports = (req, res) => {
  console.info('req', req);
  res.status(200).json({ message: 'Handler Alo' });
};
