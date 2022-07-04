import { Component } from 'react';
import autoBind from 'auto-bind';

class NoteInput extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         body: '',
         limit: 50,
      }

      autoBind(this);
   }

   onTitleChangeHandler(event) {
      const limit = 50;

      this.setState((prevState) => {
         return {
            ...prevState,
            title: event.target.value.slice(0, limit),
            limit: limit - event.target.value.slice(0, limit).length,
         }
      });
   }

   onBodyChangeHandler(event) {
      this.setState((prevState) => {
         return {
            ...prevState,
            body: event.target.value,
         }
      });
   }

   resetFormInput() {
      this.setState((prevState) => {
         return {
            title: prevState.title = '',
            body: prevState.body = '',
            limit: prevState.limit = 50,
         }
      });
   }

   onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
      this.resetFormInput();
   }

   render() {
      return (
         <form className="note__form" onSubmit={this.onSubmitEventHandler}>
            <div className="note__form__limit-info">Sisa karakter <span>{this.state.limit}</span></div>
            <input type="text" placeholder="Title" required value={this.state.title} onChange={this.onTitleChangeHandler} />
            <textarea placeholder="Write your notes..." rows="5" required value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
            <button type="submit" className="btn btn--primary">Simpan</button>
         </form>
      )
   }
}

export default NoteInput;