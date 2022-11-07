import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";

function DetailPage() {
   const [note, setNote] = React.useState(null);
   const [loading, setLoading] = React.useState(true);
   const { id } = useParams();

   React.useEffect(() => {
      getNote(id).then(({ data }) => {
         setNote(data);
         setLoading(false);
      });
   }, [id]);

   if (loading) {
      return <p>Loading...</p>;
   }

   if (note === null) {
      return <p>Note not found!</p>;
   }

   return <NoteDetail note={note} />;
}

DetailPage.propType = {
   id: PropTypes.string.isRequired,
};

export default DetailPage;
