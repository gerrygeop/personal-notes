import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

function NoteDetail({ title, body, createdAt, archived }) {
   return (
      <div>
         <h3 className="card__title">{title}</h3>
         <p>{showFormattedDate(createdAt)}</p>
         <p>{body}</p>
         <p>Archived: {archived}</p>
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
