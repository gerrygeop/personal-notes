import React from "react";
import {
   getArchivedNotes,
   deleteNote,
   unarchiveNote,
} from "../utils/network-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.js";
import LocaleContext from "../contexts/LocaleContext";

function ArchivePage() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [notes, setNotes] = React.useState([]);
   const [loading, setLoading] = React.useState(true);
   const [keyword, setKeyword] = React.useState(() => {
      return searchParams.get("keyword") || "";
   });
   const { locale } = React.useContext(LocaleContext);

   React.useEffect(() => {
      getArchivedNotes().then(({ data }) => {
         setNotes(data);
         setLoading(false);
      });
   }, []);

   async function onDeleteEventHandler(id) {
      await deleteNote(id);
      const { data } = await getArchivedNotes();
      setNotes(data);
   }

   async function onArchiveEventHandler(id) {
      await unarchiveNote(id);
      const { data } = await getArchivedNotes();
      setNotes(data);
   }

   function onKeywordChangeHandler(keyword) {
      setKeyword(keyword);
      setSearchParams(keyword);
   }

   const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
   });

   return (
      <section>
         <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />

         <h2 className="heading">
            {locale === "en" ? "Archived Notes" : "Catatan yang diarsipkan"}
         </h2>
         {loading ? (
            <p>Loading...</p>
         ) : (
            <NoteList
               key={"archived-notes"}
               notes={filteredNotes}
               onArchive={onArchiveEventHandler}
               onDelete={onDeleteEventHandler}
               isArchived={true}
            />
         )}
      </section>
   );
}

export default ArchivePage;
