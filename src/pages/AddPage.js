import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/index";
import { useNavigate } from "react-router-dom";

function AddPage() {
   const navigate = useNavigate();

   function onAddNoteEventHandler(note) {
      addNote(note);
      navigate("/");
   }

   return (
      <section>
         <h2 className="heading">Tambah Catatan</h2>
         <NoteInput addNote={onAddNoteEventHandler} />
      </section>
   );
}

export default AddPage;
