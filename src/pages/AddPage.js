import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function AddPage() {
   const navigate = useNavigate();
   const { locale } = React.useContext(LocaleContext);

   async function onAddNoteEventHandler(note) {
      await addNote(note);
      navigate("/");
   }

   return (
      <section>
         <h2 className="heading">
            {locale === "en" ? "Create a new note" : "Buat Catatan Baru"}
         </h2>
         <NoteInput addNote={onAddNoteEventHandler} />
      </section>
   );
}

export default AddPage;
