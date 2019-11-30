import db from '../database/models';


const { User } = db;

/**
 * Creates a user successfully
 *
 * @param {uuid} userId The user id
 * @returns {json} The response from db or error.
 */
export default function findUser(userId) {
  return User.findByPk(userId);
}
