import { useGetItembyIdQuery } from "../../services/api";

export const Comments = ({ id }) => {
  const { data, isLoading } = useGetItembyIdQuery(id);
  // console.log(data);
  return <>{isLoading ? "loading" : <div>{data.text}</div>}</>;
};
export default Comments;
