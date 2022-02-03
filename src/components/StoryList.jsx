import { useState, useEffect } from "react";
import { UserFetcher } from "./../hooks/userFetcher";
import { Link } from "react-router-dom";

const StoryList = ({ story, time }) => {
  const { loading, user } = UserFetcher(story.by);
  const td = new Date();
  const date = new Date(story.time * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const elapsedMSec = td.getTime() - story.time * 1000; // 9004000
  const elapsedSec = elapsedMSec / 1000; // 9004
  const elapsedMin = elapsedMSec / 1000 / 60; // 150.0666...
  const elapsedHour = elapsedMSec / 1000 / 60 / 60;

  return (
    <li className="list_desc">
      <h3 className="tit">
        <a href={story.url} target="_blank">
          {story.title}
        </a>
      </h3>
      <span className="author">
        <Link to={`/user/${story.by}`}>{story.by}</Link>
      </span>
      <span className="point">{user.karma}point</span>
      <span className="time">{`${Math.floor(elapsedMin)}분 전`}</span>
      <span>comment: {story.kids ? story.kids.length : 0}</span>
    </li>
  );
};

export default StoryList;
