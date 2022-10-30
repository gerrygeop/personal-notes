import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteCardBody({ id, title, body, createdAt }) {
   return (
      <div>
         <h3 className="card__title">
            <Link to={`/${id}`}>{title}</Link>
         </h3>
         <span className="card__date">{showFormattedDate(createdAt)}</span>
         <p className="card__body">{body}</p>
      </div>
   );
}

NoteCardBody.protoTypes = {
   id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   body: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
};

export default NoteCardBody;
