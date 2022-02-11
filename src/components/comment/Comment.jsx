import { useGetItembyIdQuery } from "../../services/api";
import Comments from "./Comments";
import styles from "./Comment.module.css";
import { useRef, useState } from "react";
import Timeago from "timeago-react";
import { ReactComponent as UserIcon } from "../../assets/icons/user_ico.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment_ico.svg";

export const Comment = (props) => {
  const {
    match: {
      params: { ids },
    },
  } = props;
  const { data, isLoading } = useGetItembyIdQuery(ids);
  //console.log(data);
  const desc =
    data && (data.text ? { __html: data.text } : { __html: data.url });
  const modeHandler = (e) => {
    console.log(e.target.classList);
  };

  return (
    <>
      {isLoading || !data ? (
        "loading"
      ) : (
        <div>
          <div className={styles.main_cont}>
            <header className={styles.header}>
              <UserIcon width="34px" height="34px" />
              <div className={styles.user_info}>
                <p className={styles.top}>{data.by}</p>
                <p className={styles.bott}>
                  <span className={styles.point}>{`${data.score} points`}</span>
                  <span className={styles.created_time}>
                    <Timeago datetime={data.time * 1000} />
                  </span>
                </p>
              </div>
            </header>
            <div className={styles.cont}>
              <h2 className={`${styles.cont_tit} ft_cont_tit_bold`}>
                {data.title}
              </h2>
              <div
                className={styles.cont_desc}
                dangerouslySetInnerHTML={desc}
              ></div>
            </div>
          </div>

          <ul className={styles.comment_list}>
            <div className={styles.comment_list_bar}>
              <div className={styles.comment_mode}>
                <p className="active" onClick={modeHandler}>
                  Registered
                </p>
                <p className={styles.new} onClick={modeHandler}>
                  Newest
                </p>
              </div>
              <div className={styles.comment_length}>
                <CommentIcon />
                {data.kids && data.kids.length > 0 ? data.kids.length : 0}
              </div>
            </div>
            {data.kids && data.kids.length > 0 ? (
              data.kids.map((commentId) => (
                <Comments
                  key={commentId}
                  id={commentId}
                  isLoading={isLoading}
                  setShow={false}
                />
              ))
            ) : (
              <p className={styles.no_comment}>There are no comments yet.</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
};
export default Comment;
