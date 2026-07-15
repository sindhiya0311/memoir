import api from "../api/axios";

export const getJournals = async () => {
  const response = await api.get("/journals");
  return response.data;
};

export const createJournal = async (data) => {
  const response = await api.post("/journals", data);
  return response.data;
};

export const updateJournal = async (id, data) => {
  const response = await api.put(`/journals/${id}`, data);
  return response.data;
};

export const deleteJournal = async (id) => {
  const response = await api.delete(`/journals/${id}`);
  return response.data;
};
