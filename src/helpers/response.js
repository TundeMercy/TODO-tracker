/* eslint-disable arrow-body-style */
export const successResponse = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({ status: 'success', message, data });
};

export const errorResponse = (res, statusCode, message, errors = {}) => {
  return res.status(statusCode).json({ status: 'error', message, errors, });
};

export const serverError = (res, statusCode = 500) => {
  return res.status(statusCode).json({
    status: 'error',
    message: 'Your request cannot be processed at this time. Please try again later.',
  });
};
