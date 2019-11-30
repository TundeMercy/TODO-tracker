import { successResponse, errorResponse, serverError } from '../helpers/response';
import findUser from '../helpers/findUser';

const createTodo = async (req, res) => {
  try {
    const user = await findUser(req.user);
    const todo = await user.addTodo(req.body);
    if (todo) {
      return successResponse(
        res,
        201,
        'Todo added successfully',
        todo
      );
    }
    return errorResponse(
      res,
      409,
      'Problem adding new todo, please try again'
    );
  } catch (error) {
    return serverError(res);
  }
};

const getTodos = async (req, res) => {
  try {
    const user = await findUser(req.user);
    const todos = await user.getTodos();
    if (todos) {
      return successResponse(
        res,
        200,
        'Todos retrieved successfuly',
        todos
      );
    }
    return errorResponse(res, 404, 'You have not added any todo yet');
  } catch (error) {
    return serverError(res);
  }
};

const getTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const user = await findUser(req.user);
    const todo = await user.getTodoByPk(todoId);
    if (todo) {
      return successResponse(
        res,
        200,
        'Todos retrived successfuly',
        todo
      );
    }
    return errorResponse(
      res,
      404,
      'Todo not found'
    );
  } catch (error) {
    return serverError(res);
  }
};

export { createTodo, getTodos, getTodo };
