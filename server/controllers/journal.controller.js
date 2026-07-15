import {
  createJournal,
  getAllJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
} from "../services/journal.service.js";

export const create = async (req, res) => {
  try {
    const journal = await createJournal(req.user.id, req.body);

    res.status(201).json({
      success: true,
      data: journal,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const journals = await getAllJournals(req.user.id);

    res.json({
      success: true,
      data: journals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const journal = await getJournalById(req.params.id, req.user.id);

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found",
      });
    }

    res.json({
      success: true,
      data: journal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const journal = await updateJournal(req.params.id, req.user.id, req.body);

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found",
      });
    }

    res.json({
      success: true,
      data: journal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const journal = await deleteJournal(req.params.id, req.user.id);

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found",
      });
    }

    res.json({
      success: true,
      message: "Journal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
