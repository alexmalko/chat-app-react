import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { deletePost } from "../../../actions/messages";
import { connect } from "react-redux";

function PopUp({ id, deletePost }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <i className="fas fa-ellipsis-v" onClick={handleClick}></i>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={() => deletePost(id)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default connect(null, { deletePost })(PopUp);
