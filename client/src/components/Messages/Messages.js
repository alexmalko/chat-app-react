import React, { useEffect } from "react";
import { getPosts, deletePost } from "../../actions/post";
import { connect } from "react-redux";

function Message({ getPosts, post: { posts, _id }, deletePost }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="div3-2">
      {posts.map((post) => (
        <div className="message">
          <div className="profile-picture">
            <i className="fas fa-id-badge"></i>
          </div>
          <div className="profile-status">
            Alex Malko 4:48 PM
            <i
              className="fas fa-trash"
              onClick={() => deletePost(post._id)}
            ></i>
          </div>
          <div className="profile-message">{post.text}</div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts, deletePost })(Message);

// ------------------------storing messages in local

// import React from "react";

// export default function Message({ todos, removeTodo, id }) {
//   return (
//     <div className="div3-2">
//       {todos.map((todo, i) => (
//         <div className="message">
//           <div className="profile-picture">
//             <i className="fas fa-id-badge"></i>
//           </div>
//           <div className="profile-status">
//             Alex Malko 4:48 PM
//             <i className="fas fa-trash" onClick={() => removeTodo(todo.id)}></i>
//           </div>
//           <div className="profile-message">{todo.task}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
