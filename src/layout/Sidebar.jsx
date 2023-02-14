import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MAIN</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
                Dashboard
            </li>
            <li className="sidebarListItem border-bottom">
              <Timeline className="sidebarIcon" />
              Edit profile
            </li>
            <li className="sidebarListItem border-bottom">
              <TrendingUp className="sidebarIcon" />
              Messages
            </li>
          

          <li className="sidebarListItem border-bottom">
              <TrendingUp className="sidebarIcon" />
              Agents List
            </li>
            <li className="sidebarListItem border-bottom">
              <TrendingUp className="sidebarIcon" />
              Submenu
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">LISTINGS</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem border-bottom">
              <PermIdentity className="sidebarIcon" />
              My Listings
            </li>
            <li className="sidebarListItem border-bottom">
              <Link to={"/"} className="py-0">
                <Storefront className="sidebarIcon" />
                Bookings
              </Link>
            </li>
            <li className="sidebarListItem border-bottom">
              <AttachMoney className="sidebarIcon" />
              Reviews
            </li>
            <li className="sidebarListItem border-bottom">
              <BarChart className="sidebarIcon" />
              Add News
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}