import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "./../components/StoryList";
import { List } from "./../components/List";

const Job = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("job");
  //console.log(data);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <ul>
          {data.map((id) => (
            <List key={id} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default Job;
