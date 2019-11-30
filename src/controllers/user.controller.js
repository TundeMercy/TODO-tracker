import db from '../database/models';
import { successResponse, errorResponse, serverError } from '../helpers/response';
import findUser from '../helpers/findUser';

const { User } = db;

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id']
    });

    if (users.length) {
      return successResponse(
        res,
        200,
        `${users.length} users retrieved successfully`,
        users
      );
    }
    return errorResponse(
      res,
      404,
      'No User found'
    );
  } catch (error) {
    return serverError(res);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await findUser(req.params.userId);

    if (user) {
      return successResponse(
        res,
        200,
        'user retrieved successfully',
        user
      );
    }
    return errorResponse(
      res,
      404,
      'User not found'
    );
  } catch (error) {
    return serverError(res);
  }
};

export { getUser, getUsers };
