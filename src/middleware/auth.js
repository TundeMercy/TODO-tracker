import jwt from 'jsonwebtoken';
import database from '../database/models';
import { errorResponse } from '../helpers/response';

const { User } = database;

/**
 * Check if user already exists
 *
 * @param {obj} req The request object
 * @param {obj} res The response object
 * @param {obj} next The next function
 * @returns {Function} response
 */
export default {
  checkExistingUser: async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      return errorResponse(res, 409, 'user already exist');
    }
    return next();
  },

  checkToken: (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers.authorization;
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    if (token) {
      const { JWT_KEY } = process.env;
      jwt.verify(token, JWT_KEY, (err, user) => {
        if (err) {
          return errorResponse(
            res,
            400,
            'Invalid token, please provide a valid token'
          );
        }
        req.user = user;
        next();
      });
    }
    return errorResponse(res, 404, 'Auth token is not supplied');
  },
};
