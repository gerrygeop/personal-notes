import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";

function NoteHeader({ logout }) {
   return (
      <header className="note__header">
         <h1>👾Nōto</h1>

         <nav className="navigation">
            <ul>
               <li>
                  <Link to="/">
                     <FiHome />
                  </Link>
               </li>
               <li>
                  <Link to="/archive">
                     <BiBookmarks />
                  </Link>
               </li>
               <li>
                  <Link to="/add">
                     <FiPlusCircle />
                  </Link>
               </li>
               <li>
                  <button onClick={logout}>
                     <FiLogOut />
                  </button>
               </li>
            </ul>
         </nav>
      </header>
   );
}

NoteHeader.propTypes = {
   logout: PropTypes.func.isRequired,
};

export default NoteHeader;
