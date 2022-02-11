import { useGetItembyIdQuery } from "../../services/api";
import styles from "./Comments.module.css";
import Timeago from "timeago-react";
import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user_ico.svg";
import { ReactComponent as TimeIcon } from "../../assets/icons/time_ico.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow_ico.svg";

export const Comments = ({ id, setShow }) => {
  const { data, isLoading } = useGetItembyIdQuery(id);
  const desc =
    data && (data.text ? { __html: data.text } : { __html: data.url });
  const [showReplies, setShowReplies] = useState(setShow);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div className={styles.comment_wrap}>
          <div
            className={`${styles.top_bar} ${
              showReplies ? styles.show : styles.hide
            }`}
          >
            <div className={styles.user_cont}>
              <UserIcon width="20px" height="20px" fill="#3F3F3F" />
              <span className={`${styles.id} ft_head_line_3`}>{data.by}</span>
            </div>
            <div>
              <TimeIcon />
              <span className={styles.time}>
                {" "}
                <Timeago datetime={data.time * 1000} />
              </span>
            </div>
            <div
              className={styles.arrow_ico}
              onClick={() => setShowReplies(!showReplies)}
            >
              <ArrowIcon />
            </div>
          </div>
          {showReplies && (
            <div className={styles.bott}>
              <p dangerouslySetInnerHTML={desc} className={styles.reply}></p>
              {data.kids && (
                <ul className={styles.re_comment}>
                  {data.kids.map((commentId) => (
                    <Comments
                      key={commentId}
                      id={commentId}
                      isLoading={isLoading}
                      setShow={true}
                    />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Comments;
