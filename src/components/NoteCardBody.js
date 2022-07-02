import { showFormattedDate } from '../utils/index';

function NoteCardBody({ title, body, createdAt }) {
   return (
      <div>
         <h3 className="card__title">{ title }</h3>
         <span className="card__date">{ showFormattedDate(createdAt) }</span>
         <p className="card__body">{ body }</p>
      </div>
   );
}

export default NoteCardBody;