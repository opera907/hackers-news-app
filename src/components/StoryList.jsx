import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetItembyIdQuery } from "../services/api";
const StoryList = ({ id }) => {
  //const { loading, user } = UserFetcher(story.by);
  //console.log(story);

  const { data, isLoading, error } = useGetItembyIdQuery(id);
  // const td = new Date();
  // const date = new Date(data.time * 1000).toLocaleDateString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  // });
  // const elapsedMSec = td.getTime() - data.time * 1000; // 9004000
  // const elapsedSec = elapsedMSec / 1000; // 9004
  // const elapsedMin = elapsedMSec / 1000 / 60; // 150.0666...
  // const elapsedHour = elapsedMSec / 1000 / 60 / 60;

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <li className="list_desc">
          <h3 className="tit">
            <a href={data.url} target="_blank">
              {data.title}
            </a>
          </h3>
          <span className="author">
            <Link to={`/user/${data.by}`}>{data.by}</Link>
          </span>
          <span className="point">point</span>
          {/* <span className="time">{`${Math.floor(elapsedMin)}분 전`}</span> */}
          <span>comment: {data.kids ? data.kids.length : 0}</span>
        </li>
      )}
    </>
  );
};

export default StoryList;
