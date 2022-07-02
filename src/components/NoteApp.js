import { Component } from 'react';
import { getData } from '../utils/index';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import NoteHeader from './NoteHeader';

class NoteApp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         notes: getData(),
         query: '',
      }

      this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
      this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
      this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
      this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
   }

   onDeleteEventHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
   }

   onArchiveEventHandler(id) {
      const archives = [...this.state.notes];
      const index = this.state.notes.findIndex(note => note.id === id);
      archives[index].archived = archives[index].archived ? false : true;
      this.setState({ notes: archives });
   }

   onAddNoteEventHandler({ title, body }) {
      this.setState((prevState) => {
         return {
            notes: [
               ...prevState.notes,
               {
                  id: +new Date(),
                  title,
                  body,
                  createdAt: new Date().toISOString(),
                  archived: false,
               }
            ]
         }
      });
   }

   onSearchNoteEventHandler(query) {
      this.setState(() => {
         return {
            query: query
         }
      })
   }

   render() {
      return (
         <div className="note">
            <NoteHeader onSearch={this.onSearchNoteEventHandler} />
            <NoteInput addNote={this.onAddNoteEventHandler} />
            <h2>List Notes</h2>
            <NoteList key={'unarchived-notes'} query={this.state.query} notes={this.state.notes} onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler} />
            <h2>Notes Archived</h2>
            <NoteList key={'archived-notes'} query={this.state.query} notes={this.state.notes} onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler} isArchived={true} />
         </div>
      );
   }
}

export default NoteApp;