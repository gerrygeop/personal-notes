import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

function NoteDetail({ note }) {
   return (
      <div className="note__detail">
         <h1>{note.title}</h1>
         <span className="text__date">{showFormattedDate(note.createdAt)}</span>
         <p>{note.body}</p>
      </div>
   );
}

NoteDetail.propTypes = {
   note: PropTypes.object.isRequired,
};

export default NoteDetail;
