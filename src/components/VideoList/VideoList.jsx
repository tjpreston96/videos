import React, { Component } from "react";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });
  return (
    <div>
      {renderedList}
      {/* extra for formatting */}
    </div>
  );
};

export default VideoList;
