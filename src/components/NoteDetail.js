import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

function NoteDetail({ title, body, createdAt, archived }) {
   return (
      <div className="note__detail">
         <h1>{title}</h1>
         <span className="text__date">{showFormattedDate(createdAt)}</span>
         <p>{body}</p>
      </div>
   );
}

NoteDetail.propTypes = {
   title: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
   archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
