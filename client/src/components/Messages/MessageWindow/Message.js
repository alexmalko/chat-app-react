import React from "react";
import PopUp from "./PopUp";
import { connect } from "react-redux";
import useToogleState from "./useToogleState";
import EditMessageForm from "./EditMessageForm";

function PostItem({ post: { _id, text } }) {
  const [isEditing, toggle] = useToogleState();

  return (
    <div className="div3-2">
      {isEditing ? (
        <EditMessageForm text={text} toggle={toggle} id={_id} />
      ) : (
        <div className="message">
          <div className="profile-picture">
            <i className="fas fa-id-badge"></i>
          </div>
          <div className="profile-status">
            Alex Malko 4:48 PM
            <PopUp id={_id} toggle={toggle} />
            <button onClick={() => toggle()}>X</button>
          </div>
          <div className="profile-message">{text}</div>
        </div>
      )}
    </div>
  );
}

export default connect(null)(PostItem);
