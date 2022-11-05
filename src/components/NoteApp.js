import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import autoBind from "auto-bind";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NoteHeader from "./NoteHeader";
import { getUserLogged, putAccessToken } from "../utils/network-data";

class NoteApp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         authedUser: null,
         initializing: true,
      };

      autoBind(this);
   }

   async onLoginSuccess({ accessToken }) {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();

      this.setState(() => {
         return {
            authedUser: data,
         };
      });
   }

   onLogout() {
      this.setState(() => {
         return {
            authedUser: null,
         };
      });
      putAccessToken("");
   }

   async componentDidMount() {
      const { data } = await getUserLogged();

      this.setState(() => {
         return {
            authedUser: data,
            initializing: false,
         };
      });
   }

   render() {
      if (this.state.initializing) {
         return null;
      }

      if (this.state.authedUser === null) {
         return (
            <div className="note">
               <header className="note__header">
                  <h1 className="brand">
                     <Link to="/">👾Nōto</Link>
                  </h1>
               </header>

               <main>
                  <Routes>
                     <Route
                        path="/*"
                        element={
                           <LoginPage loginSuccess={this.onLoginSuccess} />
                        }
                     />
                     <Route path="/register" element={<RegisterPage />} />
                  </Routes>
               </main>
            </div>
         );
      }

      return (
         <div className="note">
            <NoteHeader logout={this.onLogout} />

            <main>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/add" element={<AddPage />} />
                  <Route path="/:id" element={<DetailPage />} />
               </Routes>
            </main>
         </div>
      );
   }
}

export default NoteApp;
