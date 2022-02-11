import StoryList from "../components/storyList/StoryList";
import { useGetUserbyNameQuery } from "../services/api";
import { Category } from "./../components/category/Category";
import { useState, useEffect } from "react";
import TimeAgo from "timeago-react";
import styles from "../styles/UserPage.module.css";
export const Userpage = (props) => {
  const {
    match: {
      params: { name },
    },
  } = props;
  const { data, isLoading, error } = useGetUserbyNameQuery(name);
  const [pannel, setPannel] = useState("submissions");
  const handleClick = (e) => setPannel(e.target.value);
  const desc =
    data &&
    (data.about ? { __html: data.about } : { __html: "no meesage here" });
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <section className={styles.user_page}>
          <div className={styles.user_info_wrap}>
            <h2 className={`${styles.user_id} ft_cont_tit_bold`}>{data.id} </h2>
            <ul className={styles.info_cont}>
              <li className={styles.join_cont}>
                <span className={styles.info_tit}>Joined</span>
                <span className={styles.info_desc}>
                  <TimeAgo datetime={data.created * 1000} />
                </span>
              </li>
              <li className={styles.karma_cont}>
                <span className={styles.info_tit}>Karma</span>
                <span className={styles.info_desc}>{data.karma}</span>
              </li>
            </ul>
            <div
              className={styles.user_about}
              dangerouslySetInnerHTML={desc}
            ></div>
          </div>

          <Category
            handleClick={handleClick}
            pannel={pannel}
            value={["submissions", "comments"]}
          />
          <ul>
            {data.submitted.slice(0, 20).map((id) => {
              return <StoryList key={id} id={id} pannel={pannel} />;
            })}
          </ul>
        </section>
      )}
    </>
  );
};
