import React from "react";
import "./Body.css";
import { Input, InputLabel, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PublicIcon from "@material-ui/icons/Public";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import Results from "./Results";

function Body(Icon) {
  return (
    <div className="body">
      <div className="body__header">
        <SearchIcon className="bit" />
        <Input className="body__option" placeholder="Search"></Input>
        <div className="btn1">
          {" "}
          <button className="btn1">
            <PublicIcon></PublicIcon>
            <p>EN</p>
          </button>
          <button className="btn2">
            <AccountBoxIcon></AccountBoxIcon>
            <p>Login</p>
          </button>
          <button className="btn2">
            <EmojiPeopleIcon></EmojiPeopleIcon>
            <p>TryNow</p>
          </button>
        </div>
      </div>
      <Results />
    </div>
  );
}

export default Body;
