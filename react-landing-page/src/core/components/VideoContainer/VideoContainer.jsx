import React from "react";


export function VideoContainer(props) {
  return (
    <div className="video-container">
      <iframe width="1264" height="711" src="https://www.youtube.com/embed/DLX62G4lc44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="video"></iframe>
    </div>
  )
}