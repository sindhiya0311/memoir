import { useEffect, useState } from "react";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import JournalToolbar from "../../components/dashboard/JournalToolbar";
import JournalGrid from "../../components/dashboard/JournalGrid";

import CreateJournalModal from "../../components/journal/CreateJournalModal";
import EditJournalModal from "../../components/journal/EditJournalModal";

import ConfirmModal from "../../components/ui/ConfirmModal";

import { getJournals, deleteJournal } from "../../services/journal.service";

import useJournalFilter from "../../hooks/useJournalFilter";

const Dashboard = () => {
  const [journals, setJournals] = useState([]);

  const [search, setSearch] = useState("");
  const [mood, setMood] = useState("All");

  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [selectedJournal, setSelectedJournal] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [journalToDelete, setJournalToDelete] = useState(null);

  const filteredJournals = useJournalFilter(journals, search, mood);

  const fetchJournals = async () => {
    try {
      const res = await getJournals();
      setJournals(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  const handleEdit = (journal) => {
    setSelectedJournal(journal);
    setEditOpen(true);
  };

  const handleDeleteClick = (id) => {
    setJournalToDelete(id);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteJournal(journalToDelete);

      setConfirmOpen(false);
      setJournalToDelete(null);

      fetchJournals();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
        <DashboardHeader />

        <JournalToolbar
          search={search}
          setSearch={setSearch}
          mood={mood}
          setMood={setMood}
          onCreate={() => setCreateOpen(true)}
        />

        <JournalGrid
          journals={filteredJournals}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />
      </main>

      <CreateJournalModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreated={fetchJournals}
      />

      <EditJournalModal
        open={editOpen}
        journal={selectedJournal}
        onClose={() => setEditOpen(false)}
        onUpdated={() => {
          fetchJournals();
          setEditOpen(false);
        }}
      />

      <ConfirmModal
        open={confirmOpen}
        title="Delete Journal"
        message="This action cannot be undone."
        onCancel={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Dashboard;
