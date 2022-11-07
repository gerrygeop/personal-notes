import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import {
   FiPlusSquare,
   FiLogOut,
   FiSun,
   FiMoon,
   FiBookmark,
} from "react-icons/fi";
import { HiLanguage } from "react-icons/hi2";

function NoteHeader({ logout, isLogin }) {
   const { theme, toggleTheme } = React.useContext(ThemeContext);
   const { locale, toggleLocale } = React.useContext(LocaleContext);

   return (
      <header className="note__header">
         <h1 className="brand">
            <Link to="/">👾Nōto</Link>
         </h1>

         {isLogin ? (
            <nav className="navigation">
               <ul>
                  <li>
                     <Link to="/add" title="Create Note">
                        <FiPlusSquare />
                     </Link>
                  </li>
                  <li>
                     <Link to="/archive" title="Archive">
                        <FiBookmark />
                     </Link>
                  </li>
                  <li>
                     <button onClick={toggleTheme}>
                        {theme === "light" ? (
                           <FiMoon title="Dark Theme" />
                        ) : (
                           <FiSun title="Light Theme" />
                        )}
                     </button>
                  </li>
                  <li>
                     <button
                        onClick={toggleLocale}
                        title={locale === "en" ? "Terjemahkan" : "Translate"}
                     >
                        <HiLanguage />
                     </button>
                  </li>
                  <li>
                     <button onClick={logout} title="Log Out">
                        <FiLogOut />
                     </button>
                  </li>
               </ul>
            </nav>
         ) : (
            ""
         )}
      </header>
   );
}

NoteHeader.propTypes = {
   logout: PropTypes.func.isRequired,
   isLogin: PropTypes.bool.isRequired,
};

export default NoteHeader;
