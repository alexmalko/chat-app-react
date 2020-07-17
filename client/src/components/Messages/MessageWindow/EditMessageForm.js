import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { updatePost } from "../../../actions/messages";
import { connect } from "react-redux";

function EditTodoForm({ id, updatePost, toggle }) {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePost(id, { text });
          toggle();
          setText("");
        }}
        style={{ marginLeft: "1rem", width: "100%" }}
      >
        <TextField
          margin="normal"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default connect(null, { updatePost })(EditTodoForm);
