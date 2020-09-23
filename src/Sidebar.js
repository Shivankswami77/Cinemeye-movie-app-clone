import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import StarIcon from "@material-ui/icons/Star";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://us.123rf.com/450wm/dragomirescu/dragomirescu1810/dragomirescu181001161/110066498-grunge-alphabet-letter-m-logo-design-in-white-red-and-black-colors-suitable-for-a-company-or-busines.jpg?ver=6"
        width="100px"
      />
      {/**  <h3 className="head">MovieMania</h3>*/}

      <SidebarOption Icon={HomeIcon} title="Main Page" />
      <SidebarOption Icon={TvIcon} title="TV channels" />
      <SidebarOption Icon={LocalMoviesIcon} title="Movies" />
      <SidebarOption Icon={PersonalVideoIcon} title="TV series" />
      <SidebarOption Icon={OfflineBoltIcon} title="Concerts" />
      <SidebarOption Icon={SportsSoccerIcon} title="Sports" />
      <SidebarOption Icon={ChildCareIcon} title="For kids" />
      <SidebarOption Icon={StarIcon} title="Favourites" />
      <SidebarOption Icon={AccountBoxIcon} title="Personal data" />
    </div>
  );
}

export default Sidebar;
