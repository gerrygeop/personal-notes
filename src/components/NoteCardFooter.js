import DeleteButton from "./DeleteButton"
import ArchiveButton from "./ArchiveButton";

function NoteCardFooter({ id, onArchive, onDelete }) {
   return (
      <div className="card__footer">
         <ArchiveButton id={id} onArchive={onArchive} />
         <DeleteButton id={id} onDelete={onDelete} />
      </div>
   );
}

export default NoteCardFooter;