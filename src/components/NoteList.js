import NoteCard from "./NoteCard";

function NoteList({ notes, query, onArchive, onDelete, isArchived = false }) {
   const notesList = notes.filter((note) => (isArchived) ? note.archived === true : note.archived === false)

   return (
      <div className="grid">
         {
            notesList.length < 1
            ? <p className="note__empty">Tidak ada catatan {(isArchived) ? "yang diarsipkan" : ""}</p>
            : notesList
               .filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))
               .map((note) => (
                  <NoteCard
                     key={note.id}
                     onArchive={onArchive}
                     onDelete={onDelete}
                     {...note}
                  />
               ))
               .reverse()
         }
      </div>
   );
}

export default NoteList;