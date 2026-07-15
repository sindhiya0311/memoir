import express from "express";

import protect from "../middleware/auth.middleware.js";
import validate from "../middleware/validation.middleware.js";

import { createJournalValidation } from "../validators/journal.validator.js";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/journal.controller.js";

const router = express.Router();

router.use(protect);

router.post("/", createJournalValidation, validate, create);

router.get("/", getAll);

router.get("/:id", getOne);

router.put("/:id", update);

router.delete("/:id", remove);

export default router;
