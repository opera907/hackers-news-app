import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "./../components/StoryList";

const Ask = (props) => {
  //const { loading, newList } = DataFetcher("Ask");
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("ask");

  return (
    <>
      {!isLoading ? (
        <div>
          <h1>Ask story</h1>
          <ul>
            {data.slice(0, 30).map((id) => (
              <StoryList key={id} id={id} />
            ))}
          </ul>
        </div>
      ) : (
        "loadong"
      )}
    </>
  );
};
export default Ask;
