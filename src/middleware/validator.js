import { matchedData, validationResult } from 'express-validator';
import { errorResponse } from '../helpers/response';

export default schemas => {
  const validatorCheck = (req, res, next) => {
    const errors = validationResult(req);
    req = { ...req, ...matchedData(req) };

    if (!errors.isEmpty()) {
      const mapErrors = Object
        .entries(errors.mapped())
        .reduce((accumulator, [key, value]) => {
          accumulator[key] = value.msg;
          return accumulator;
        }, {});
      return errorResponse(res, 400, 'validation error', mapErrors);
    }
    return next();
  };
  return [...(schemas.length && [schemas]), validatorCheck];
};
