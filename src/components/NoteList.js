import NoteCard from "./NoteCard";
import PropTypes from "prop-types";

function NoteList({ notes, onArchive, onDelete, isArchived = false }) {
   const notesList = notes.filter((note) =>
      isArchived ? note.archived === true : note.archived === false
   );

   return (
      <div className="grid">
         {notesList.length < 1 ? (
            <p className="note__empty">
               Tidak ada catatan {isArchived ? "diarsip" : ""}
            </p>
         ) : (
            notesList
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
   onArchive: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   isArchived: PropTypes.bool,
};

export default NoteList;
