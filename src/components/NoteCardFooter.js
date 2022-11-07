import PropTypes from "prop-types";
import { HiTrash, HiBookmark } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";

function NoteCardFooter({ id, onArchive, onDelete, isArchived }) {
   return (
      <div className="card__footer">
         <button
            className="btn btn--primary btn--icon"
            title={isArchived ? "Unarchived" : "Archived"}
            onClick={() => onArchive(id)}
         >
            {isArchived ? (
               <HiBookmark className="size-5" />
            ) : (
               <FiBookmark className="size-5" />
            )}
         </button>

         <button
            className="btn btn--danger btn--icon"
            title="Delete"
            onClick={() => onDelete(id)}
         >
            <HiTrash className="size-5" />
         </button>
      </div>
   );
}

NoteCardFooter.protoTypes = {
   id: PropTypes.string.isRequired,
   onArchive: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   isArchived: PropTypes.bool,
};

export default NoteCardFooter;
