import { useMemo } from "react";

const useJournalFilter = (journals, searchTerm, mood) => {
  return useMemo(() => {
    return journals.filter((journal) => {
      const matchesSearch =
        journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        journal.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesMood = mood === "All" || journal.mood === mood;

      return matchesSearch && matchesMood;
    });
  }, [journals, searchTerm, mood]);
};

export default useJournalFilter;
