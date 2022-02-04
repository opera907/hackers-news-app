import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "./../components/StoryList";

const Show = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("show");

  return (
    <>
      {!isLoading ? (
        <div>
          <h1>Show story</h1>
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
export default Show;
