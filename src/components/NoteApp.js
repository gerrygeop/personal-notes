import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NoteHeader from "./NoteHeader";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";

function NoteApp() {
   const [authedUser, setAuthedUser] = React.useState(null);
   // const [initializing, setInitializing] = React.useState(true);
   const [locale, setLocale] = React.useState(
      localStorage.getItem("locale") || "en"
   );
   const [theme, setTheme] = React.useState(
      localStorage.getItem("theme") || "light"
   );

   async function onLoginSuccess({ accessToken }) {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();
      setAuthedUser(data);
      // setInitializing(false);
   }

   const onLogout = () => {
      setAuthedUser(null);
      putAccessToken("");
   };

   const toggleLocale = () => {
      setLocale((prevLocale) => {
         const newLocale = prevLocale === "en" ? "id" : "en";
         localStorage.setItem("locale", newLocale);
         return newLocale;
      });
   };

   const localeContextValue = React.useMemo(() => {
      return {
         locale,
         toggleLocale,
      };
   }, [locale]);

   const toggleTheme = () => {
      setTheme((prevTheme) => {
         const newTheme = prevTheme === "light" ? "dark" : "light";
         localStorage.setItem("theme", newTheme);
         return newTheme;
      });
   };

   const themeContextValue = React.useMemo(() => {
      return {
         theme,
         toggleTheme,
      };
   }, [theme]);

   React.useEffect(() => {
      // setInitializing(false);
      document.documentElement.setAttribute("data-theme", theme);
      // getUserLogged().then(setAuthedUser);
   }, [theme]);

   // if (initializing) {
   //    return null;
   // }

   return (
      <ThemeContext.Provider value={themeContextValue}>
         <LocaleContext.Provider value={localeContextValue}>
            <div className="note">
               <NoteHeader
                  logout={onLogout}
                  isLogin={authedUser === null ? false : true}
               />

               <main>
                  {authedUser === null ? (
                     <Routes>
                        <Route
                           path="/*"
                           element={<LoginPage loginSuccess={onLoginSuccess} />}
                        />
                        <Route path="/register" element={<RegisterPage />} />
                     </Routes>
                  ) : (
                     <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/archive" element={<ArchivePage />} />
                        <Route path="/add" element={<AddPage />} />
                        <Route path="/note/:id" element={<DetailPage />} />
                        <Route
                           path="/*"
                           element={
                              <p>
                                 {locale === "en"
                                    ? "Page not found!"
                                    : "Halaman tidak ditemukan!"}
                              </p>
                           }
                        />
                     </Routes>
                  )}
               </main>
            </div>
         </LocaleContext.Provider>
      </ThemeContext.Provider>
   );
}

export default NoteApp;
