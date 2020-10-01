export default (req, res, next) => {
  if (!req.user) {
    return res.status(401).error({ error: 'You must log in!' });
  }

  next();
};
