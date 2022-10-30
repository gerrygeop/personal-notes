import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import NoteHeader from "./NoteHeader";

function NoteApp() {
   return (
      <div className="note">
         <NoteHeader />

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

export default NoteApp;
