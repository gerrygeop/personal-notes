import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteCardBody({ id, title, body, createdAt }) {
   return (
      <div>
         <h3 className="card__title truncate-1">
            <Link to={`/note/${id}`}>{title}</Link>
         </h3>
         <span className="text__date">{showFormattedDate(createdAt)}</span>
         <p className="card__body truncate-3">{body}</p>
      </div>
   );
}

NoteCardBody.protoTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
};

export default NoteCardBody;
