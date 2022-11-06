import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function AddPage() {
   const navigate = useNavigate();

   async function onAddNoteEventHandler(note) {
      await addNote(note);
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
