import { Component } from "react";
import autoBind from "auto-bind";
import { getData, deleteNote, archiveNote } from "../utils/index";
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
         notes: getData(),
         keyword: props.defaultKeyword || "",
      };

      autoBind(this);
   }

   onDeleteEventHandler(id) {
      deleteNote(id);

      this.setState(() => {
         return {
            notes: getData(),
         };
      });
   }

   onArchiveEventHandler(id) {
      archiveNote(id);

      this.setState(() => {
         return {
            notes: getData(),
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

            <h2>List Notes</h2>
            <NoteList
               key={"unarchived-notes"}
               notes={notes}
               onArchive={this.onArchiveEventHandler}
               onDelete={this.onDeleteEventHandler}
            />

            <h2>Notes Archived</h2>
            <NoteList
               key={"archived-notes"}
               notes={notes}
               onArchive={this.onArchiveEventHandler}
               onDelete={this.onDeleteEventHandler}
               isArchived={true}
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
