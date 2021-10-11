import "./CreateNote.css";
import { useState } from "react";
import { connect } from "react-redux";

const CreateNote = (props) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    };
    props.dispatch({
      type: "ADD_NOTE",
      data,
    });
  };

  return (
    <div className="note-container">
      <h1 className="note_heading">Create Note</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Note Title"
        />
        <br />
        <br />
        <textarea
          required
          rows="5"
          ref={(input) => (e) => setMessage(e.target.value)}
          cols="28"
          placeholder="Enter Note"
        />
        <br />
        <br />
        <button type="submit">Note</button>
      </form>
    </div>
  );
};

export default connect()(CreateNote);
