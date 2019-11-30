import { check } from 'express-validator';

const todoSchema = [
  check('title')
    .trim()
    .exists()
    .withMessage('Title is required')
    .isLength({ min: 2, max: 30 })
    .withMessage('Title should be between 2 to 30 characters')
    .matches(/^(\w+\s?)*\s*$/)
    .withMessage('Title should only contain alphabets and non-consecutive spaces'),
];

export default todoSchema;
