import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "./../components/StoryList";

const Top = (props) => {
  //const { loading, newList } = DataFetcher("top");
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("new");

  return (
    <>
      {!isLoading ? (
        <div>
          <h1>top story</h1>
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
export default Top;
