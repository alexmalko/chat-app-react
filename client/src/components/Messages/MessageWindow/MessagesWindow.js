import React, { useEffect } from "react";
import { getMessages } from "../../../actions/messages";
import Message from "./Message";
import { connect } from "react-redux";

const MessagesWindow = ({ getMessages, post: { posts } }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div className="div3-2">
      {posts.map((post) => (
        <>
          <Message key={posts._id} post={post} />
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getMessages })(MessagesWindow);
