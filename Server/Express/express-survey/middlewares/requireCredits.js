export default (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).error({ error: 'Not enough credits!' });
  }

  next();
};
