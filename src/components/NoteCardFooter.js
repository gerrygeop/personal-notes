import PropTypes from "prop-types";
import { HiTrash, HiBookmark } from "react-icons/hi";

function NoteCardFooter({ id, onArchive, onDelete }) {
   return (
      <div className="card__footer">
         <button
            className="btn btn--primary btn--icon"
            title="Archive"
            onClick={() => onArchive(id)}
         >
            <HiBookmark className="size-5" />
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
};

export default NoteCardFooter;
