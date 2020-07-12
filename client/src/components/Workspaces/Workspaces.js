import React from "react";
import "./workspaces.css";

export default function Workspaces() {
  return (
    <div className="div2">
      <div className="div2-1">
        <p className="channel-name">Global</p>
        <i className="far fa-edit"></i>
      </div>
      <div className="div2-2">
        <p className="channels">Quick Access</p>
        <button className="section2-button">
          <i className="fas fa-glass-whiskey"></i>All unreads
        </button>
        <button className="section2-button">
          <i className="fas fa-comment-dots"></i>Threads
        </button>
        <button className="section2-button">
          <i className="far fa-comments"></i>All Dms
        </button>
        <button className="section2-button">
          <i className="fas fa-at"></i>Mentions and reactions
        </button>
        <button className="section2-button">
          <i className="far fa-bookmark"></i>Saved Items
        </button>
        <p className="channels">Channels</p>
        <button className="section2-button">
          <i className="fas fa-hashtag"></i>announcements-global
        </button>
        <button className="section2-button">
          <i className="fas fa-hashtag"></i>general-global
        </button>
        <button className="section2-button">
          <i className="fas fa-lock"></i>emergency
        </button>
        <button className="section2-button">
          <i className="fas fa-hashtag"></i>welcome
        </button>
        <button className="section2-button">
          <i className="fas fa-hashtag"></i>yay
        </button>
        <button className="section2-button">
          <i className="fas fa-lock"></i>cloud
        </button>
        <button className="section2-button">
          <i className="fas fa-hashtag"></i>release
        </button>
      </div>
    </div>
  );
}
