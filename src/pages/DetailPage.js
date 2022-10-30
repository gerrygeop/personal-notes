import { Component } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/index";
import NoteDetail from "../components/NoteDetail";

function DetailPageWrapper() {
   const { id } = useParams();
   return <DetailPage id={Number(id)} />;
}

class DetailPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         note: getNote(props.id),
      };
   }

   render() {
      if (this.state.note === null) {
         return <p>Note not found!</p>;
      }

      return (
         <section>
            <h2>Detail Catatan</h2>
            <NoteDetail {...this.state.note} />
         </section>
      );
   }
}

export default DetailPageWrapper;
