import { Component } from "react";
import autoBind from "auto-bind";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

class NoteInput extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: "",
         body: "",
         limit: 50,
      };

      autoBind(this);
   }

   onTitleChangeHandler(event) {
      const limit = 50;

      this.setState((prevState) => {
         return {
            ...prevState,
            title: event.target.value.slice(0, limit),
            limit: limit - event.target.value.slice(0, limit).length,
         };
      });
   }

   onBodyChangeHandler(event) {
      this.setState((prevState) => {
         return {
            ...prevState,
            body: event.target.value,
         };
      });
   }

   onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
   }

   render() {
      return (
         <LocaleConsumer>
            {({ locale }) => {
               return (
                  <form
                     className="note__form"
                     onSubmit={this.onSubmitEventHandler}
                  >
                     <div className="note__form__limit-info">
                        {locale === "en"
                           ? "Remaining characters"
                           : "Karakter yang tersisa"}{" "}
                        <span>{this.state.limit}</span>
                     </div>
                     <input
                        type="text"
                        placeholder={locale === "en" ? "Title" : "Judul"}
                        required
                        value={this.state.title}
                        onChange={this.onTitleChangeHandler}
                     />
                     <textarea
                        placeholder={
                           locale === "en"
                              ? "Write your notes..."
                              : "Tulis catatan anda..."
                        }
                        rows="5"
                        required
                        value={this.state.body}
                        onChange={this.onBodyChangeHandler}
                     ></textarea>

                     <button type="submit" className="btn btn--primary">
                        {locale === "en" ? "Save" : "Simpan"}
                     </button>
                  </form>
               );
            }}
         </LocaleConsumer>
      );
   }
}

NoteInput.propTypes = {
   addNote: PropTypes.func.isRequired,
};

export default NoteInput;
