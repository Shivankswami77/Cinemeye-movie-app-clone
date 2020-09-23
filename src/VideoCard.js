import React from "react";
import "./VideoCard.css";
const base_url = "https://image.tmdb.org/t/p/";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://i.pinimg.com/originals/a5/1a/cb/a51acbe42df6ff5567f2718fd002623c.jpg"
        alt="red"
      />
      <p>
        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection
        as he walks the streets of Gotham City. Arthur wears two masks -- the
        one he paints for his day job as a clown....
      </p>
      <p>1 Jan 2018</p>
      <h2>Joker</h2>
      <p>Number of likes.......</p>
    </div>
  );
}

export default VideoCard;
