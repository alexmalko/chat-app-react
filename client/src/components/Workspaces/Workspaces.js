import React from "react";
import "./workspaces.css";

export default function Workspaces() {
  return (
    <div class="div2">
      <div class="div2-1">
        <p class="channel-name">Global</p>
        <i class="far fa-edit"></i>
      </div>
      <div class="div2-2">
        <p class="channels">Quick Access</p>
        <button class="section2-button">
          <i class="fas fa-glass-whiskey"></i>All unreads
        </button>
        <button class="section2-button">
          <i class="fas fa-comment-dots"></i>Threads
        </button>
        <button class="section2-button">
          <i class="far fa-comments"></i>All Dms
        </button>
        <button class="section2-button">
          <i class="fas fa-at"></i>Mentions and reactions
        </button>
        <button class="section2-button">
          <i class="far fa-bookmark"></i>Saved Items
        </button>
        <p class="channels">Channels</p>
        <button class="section2-button">
          <i class="fas fa-hashtag"></i>announcements-global
        </button>
        <button class="section2-button">
          <i class="fas fa-hashtag"></i>general-global
        </button>
        <button class="section2-button">
          <i class="fas fa-lock"></i>emergency
        </button>
        <button class="section2-button">
          <i class="fas fa-hashtag"></i>welcome
        </button>
        <button class="section2-button">
          <i class="fas fa-hashtag"></i>yay
        </button>
        <button class="section2-button">
          <i class="fas fa-lock"></i>cloud
        </button>
        <button class="section2-button">
          <i class="fas fa-hashtag"></i>release
        </button>
      </div>
    </div>
  );
}
