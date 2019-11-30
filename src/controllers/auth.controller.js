import database from '../database/models';
import { generateToken } from '../helpers/auth';
import { errorResponse, successResponse, serverError } from '../helpers/response';

const { User } = database;

/**
 * Creates a user successfully
 *
 * @param {obj} req The request object
 * @param {obj} res The response object
 * @returns {json} The response from db or error.
 */
export const createUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    user = await user.getSafeDataValues();
    const token = generateToken(user.id);

    return successResponse(
      res,
      201,
      'Your account has been created successfully',
      { user, token }
    );
  } catch (error) {
    return serverError(res);
  }
};

/**
 * Login a vendor successfully
 *
 * @param {obj} req The request object
 * @param {obj} res The response object
 * @returns {json} The response from db or error.
 */
export const signin = async (req, res) => {
  const { password, email } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return errorResponse(res, 400, 'Email/Password incorrect');
    }
    const comparePassword = await user.validatePassword(password);
    if (!comparePassword) {
      return errorResponse(res, 400, 'Email/Password incorrect');
    }
    user = await user.getSafeDataValues();
    const token = generateToken(user.id);
    return successResponse(res, 200, 'Login successful', { user, token });
  } catch (error) {
    return serverError(res);
  }
};
