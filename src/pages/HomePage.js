import { Component } from "react";
import autoBind from "auto-bind";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.js";
import PropTypes from "prop-types";

function HomePageWrapper() {
   const [searchParams, setSearchParams] = useSearchParams();
   const keyword = searchParams.get("keyword");

   function changeSearchParams(keyword) {
      setSearchParams({ keyword });
   }

   return (
      <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
   );
}

class HomePage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         notes: [],
         keyword: props.defaultKeyword || "",
      };

      autoBind(this);
   }

   async componentDidMount() {
      const { data } = await getActiveNotes();

      this.setState(() => {
         return {
            notes: data,
         };
      });
   }

   async onDeleteEventHandler(id) {
      await deleteNote(id);
      const { data } = await getActiveNotes();

      this.setState(() => {
         return {
            notes: data,
         };
      });
   }

   async onArchiveEventHandler(id) {
      await archiveNote(id);
      const { data } = await getActiveNotes();

      this.setState(() => {
         return {
            notes: data,
         };
      });
   }

   onKeywordChangeHandler(keyword) {
      this.setState(() => {
         return {
            keyword,
         };
      });

      this.props.keywordChange(keyword);
   }

   render() {
      const notes = this.state.notes.filter((note) => {
         return note.title
            .toLowerCase()
            .includes(this.state.keyword.toLowerCase());
      });

      return (
         <section>
            <SearchBar
               keyword={this.state.keyword}
               keywordChange={this.onKeywordChangeHandler}
            />

            <h2 className="heading">List Notes</h2>
            <NoteList
               key={"unarchived-notes"}
               notes={notes}
               onArchive={this.onArchiveEventHandler}
               onDelete={this.onDeleteEventHandler}
            />
         </section>
      );
   }
}

HomePage.propType = {
   defaultKeyword: PropTypes.string.isRequired,
   keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
