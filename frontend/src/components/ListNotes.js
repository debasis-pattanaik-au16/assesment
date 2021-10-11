import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

const ListNotes = (props) => {
  return (
    <div>
      <h1 className="note_heading">All Notes</h1>
      {props.notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state,
  };
};

export default connect(mapStateToProps)(ListNotes);
