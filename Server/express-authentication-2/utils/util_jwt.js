const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.createJWT(id) {
  return jwt.sign({
    id
  }, `${process.env.JWT_SECRET}`)
}

exports.decodeJWT(token) {
  try {
    const decoded = jwt.verify(toekn, `${process.env.JWT_SECRET}`);
    return decoded;
  } catch (error) {
    return error;
  }
}