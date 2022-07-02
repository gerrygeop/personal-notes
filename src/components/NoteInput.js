import { Component } from 'react';

class NoteInput extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         body: '',
         limit: 50,
      }

      this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
      this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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
            <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler} />
            <textarea placeholder="Write your notes..." rows="5" value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
            <button type="submit" className="btn btn--primary">Simpan</button>
         </form>
      )
   }
}

export default NoteInput;