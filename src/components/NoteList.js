import React from "react";
import NoteCard from "./NoteCard";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteList({ notes, onArchive, onDelete, isArchived = false }) {
   const { locale } = React.useContext(LocaleContext);

   const notesList = notes.filter((note) =>
      isArchived ? note.archived === true : note.archived === false
   );

   return (
      <div className="grid">
         {notesList.length < 1 ? (
            <p className="note__empty">
               {locale === "en" ? "No note" : "Tidak ada catatan"}
            </p>
         ) : (
            notesList
               .map((note) => (
                  <NoteCard
                     key={note.id}
                     onArchive={onArchive}
                     onDelete={onDelete}
                     isArchived={isArchived}
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
