import NoteCardBody from "./NoteCardBody";
import NoteCardFooter from "./NoteCardFooter";
import PropTypes from "prop-types";

function NoteCard({
   id,
   title,
   body,
   createdAt,
   onArchive,
   onDelete,
   isArchived,
}) {
   return (
      <div className="card">
         <NoteCardBody
            id={id}
            title={title}
            createdAt={createdAt}
            body={body}
         />
         <NoteCardFooter
            id={id}
            onArchive={onArchive}
            onDelete={onDelete}
            isArchived={isArchived}
         />
      </div>
   );
}

NoteCard.protoTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
   onArchive: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   isArchived: PropTypes.bool,
};

export default NoteCard;
