module.exports = (req, res) => {
  console.info('req', req);
  res
    .status(404)
    .json({ message: 'Not Found', req: JSON.stringify(req, null, 2) });
};
