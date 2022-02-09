import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetItembyIdQuery, useGetUserbyNameQuery } from "../../services/api";
import styles from "./StoryList.module.css";
const StoryList = ({ id }) => {
  //const { loading, user } = UserFetcher(story.by);
  //console.log(story);
  const { data, isLoading, isFetching, error } = useGetItembyIdQuery(id, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  const setTime = (time) => {
    let date = new Date(time * 1000);
    return date.toLocaleTimeString();
  };
  const [userData, setUserData] = useState(data);

  // console.log(userData);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <li className={`${styles.post_list}`}>
          <h3 className="ft_head_line_2_bold">
            <a href={data.url} target="_blank">
              {data.title}
              {data.id}
            </a>
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
              <span className={styles.point}>{data.score} points</span>
              <span>{data && setTime(data.time)}</span>
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
