import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

function NoteHeader() {
   return (
      <div className="note__header">
         <h1>👾Nōto</h1>

         <nav className="navigation">
            <ul>
               <li>
                  <Link to="/">
                     <FiHome />
                  </Link>
               </li>
               <li>
                  <Link to="/add">
                     <FiPlusCircle />
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
}

export default NoteHeader;
