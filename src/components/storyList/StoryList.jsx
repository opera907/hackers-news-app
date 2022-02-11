import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetItembyIdQuery, useGetUserbyNameQuery } from "../../services/api";
import styles from "./StoryList.module.css";
import Timeago from "timeago-react";

const StoryList = ({ id }) => {
  const { data, isLoading, isFetching, error } = useGetItembyIdQuery(id, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  return (
    <>
      {isLoading || !data ? (
        ""
      ) : (
        <li className={`${styles.post_list}`}>
          <h3 className="ft_head_line_2_bold">
            {data && data.type === "story" ? (
              <a href={data.url} target="_blank">
                {data.title}
              </a>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: data.text }} />
            )}
          </h3>
          <div className={styles.llist_desc}>
            <Link to={`/user/${data.by}`} className={styles.author}>
              <img
                src={require("../../assets/storyList/ico_user.png")}
                alt=""
              />
              <span>{data.by}</span>
            </Link>
            <div className={styles.desc_info}>
              <span className={styles.point}>
                {data.score ? data.score : 0} points
              </span>
              <span>{data && <Timeago datetime={data.time * 1000} />}</span>
            </div>
            <Link to={`/item/${data.id}`} className={styles.comments}>
              <img
                src={require("../../assets/storyList/ico_comment.png")}
                alt=""
              />
              {data.kids ? data.kids.length : 0}
            </Link>
          </div>
        </li>
      )}
    </>
  );
};

export default StoryList;
