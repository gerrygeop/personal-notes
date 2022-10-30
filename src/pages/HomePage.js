import { Component } from "react";
import autoBind from "auto-bind";
import { getData, deleteNote } from "../utils/index";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.js";

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
      const archives = [...this.state.notes];
      const index = this.state.notes.findIndex((note) => note.id === id);
      archives[index].archived = archives[index].archived ? false : true;
      this.setState({ notes: archives });
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
      return (
         <section>
            <SearchBar
               keyword={this.state.keyword}
               keywordChange={this.onKeywordChangeHandler}
            />

            <h2>List Notes</h2>
            <NoteList
               key={"unarchived-notes"}
               keyword={this.state.keyword}
               notes={this.state.notes}
               onArchive={this.onArchiveEventHandler}
               onDelete={this.onDeleteEventHandler}
            />

            <h2>Notes Archived</h2>
            <NoteList
               key={"archived-notes"}
               keyword={this.state.keyword}
               notes={this.state.notes}
               onArchive={this.onArchiveEventHandler}
               onDelete={this.onDeleteEventHandler}
               isArchived={true}
            />
         </section>
      );
   }
}

export default HomePageWrapper;
