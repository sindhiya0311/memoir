import Journal from "../models/Journal.js";

export const createJournal = async (userId, data) => {
  const journal = await Journal.create({
    ...data,
    user: userId,
  });

  return journal;
};

export const getAllJournals = async (userId) => {
  return await Journal.find({ user: userId }).sort({
    createdAt: -1,
  });
};

export const getJournalById = async (id, userId) => {
  return await Journal.findOne({
    _id: id,
    user: userId,
  });
};

export const updateJournal = async (id, userId, data) => {
  return await Journal.findOneAndUpdate(
    {
      _id: id,
      user: userId,
    },
    data,
    {
      new: true,
      runValidators: true,
    },
  );
};

export const deleteJournal = async (id, userId) => {
  return await Journal.findOneAndDelete({
    _id: id,
    user: userId,
  });
};
