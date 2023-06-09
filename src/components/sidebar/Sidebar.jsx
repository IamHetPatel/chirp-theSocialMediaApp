import "./sidebar.css";
import {
  RssFeed,
  HelpOutline,
  WorkOutline,
  School,
  Event,
  Bookmark,
  Group,
  PlayCircle,
  Chat,
} from "@mui/icons-material";
import {Users} from "../../sample";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItenText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItenText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItenText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItenText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItenText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItenText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItenText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItenText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItenText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
