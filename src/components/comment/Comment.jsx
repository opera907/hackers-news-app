import { useGetItembyIdQuery } from "../../services/api";
import Comments from "./Comments";

export const Comment = (props) => {
  const {
    match: {
      params: { ids },
    },
  } = props;
  const { data, isLoading } = useGetItembyIdQuery(ids);
  //console.log(data);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div>
          <strong>{data.title}</strong>
          <ul>
            <h3>comments</h3>
            {data.kids &&
              data.kids.map((commentId) => (
                <Comments
                  key={commentId}
                  id={commentId}
                  isLoading={isLoading}
                />
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Comment;
