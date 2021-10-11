import "./GetAllNotes.css";
import { connect } from "react-redux";

const GetAllNotes = (props) => {
  return (
    <div>
      <h1 className="note_heading">Number of notes: {props.numberOfNotes}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfNotes: state.length,
  };
};

export default connect(mapStateToProps)(GetAllNotes);
