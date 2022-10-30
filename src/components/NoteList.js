import NoteCard from "./NoteCard";
import PropTypes from "prop-types";

function NoteList({ notes, keyword, onArchive, onDelete, isArchived = false }) {
   const notesList = notes.filter((note) =>
      isArchived ? note.archived === true : note.archived === false
   );

   return (
      <div className="grid">
         {notesList.length < 1 ? (
            <p className="note__empty">
               Tidak ada catatan {isArchived ? "yang diarsipkan" : ""}
            </p>
         ) : (
            notesList
               .filter((note) =>
                  note.title.toLowerCase().includes(keyword.toLowerCase())
               )
               .map((note) => (
                  <NoteCard
                     key={note.id}
                     onArchive={onArchive}
                     onDelete={onDelete}
                     {...note}
                  />
               ))
               .reverse()
         )}
      </div>
   );
}

NoteList.propTypes = {
   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
   keyword: PropTypes.string.isRequired,
   onArchive: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   isArchived: PropTypes.bool,
};

export default NoteList;
