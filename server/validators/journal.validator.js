import { body } from "express-validator";

export const createJournalValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required"),
];