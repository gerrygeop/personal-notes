import { Component } from "react";
import { useParams } from "react-router-dom";
import { getNote, deleteNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";

function DetailPageWrapper() {
   const { id } = useParams();
   return <DetailPage id={id} />;
}

class DetailPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         note: [],
         initializing: true,
      };
   }

   async componentDidMount() {
      const { data } = await getNote(this.props.id);

      this.setState(() => {
         return {
            note: data,
            initializing: false,
         };
      });
   }

   render() {
      if (this.state.initializing) {
         return <p>Loading...</p>;
      }

      if (this.state.note === null) {
         return <p>Note not found!</p>;
      }

      return <NoteDetail note={this.state.note} />;
   }
}

DetailPage.propType = {
   id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
