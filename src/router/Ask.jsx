import { useGetItembyIdQuery, useGetPostsByTypeQuery } from "../services/api";
import StoryList from "../components/storyList/StoryList";
import { useDispatch, useSelector } from "react-redux";
import { addNews } from "../services/testSlice";

const Ask = (props) => {
  //const { loading, newList } = DataFetcher("Ask");
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("ask");
  // const dispatch = useDispatch();
  // dispatch(addNews(data));

  return (
    <>
      {!isLoading ? (
        <section className="ask_page">
          <div className="hero">
            <img
              src={require("../assets/banner/ask_banner.png")}
              alt="hero_img"
            />
          </div>

          <ul className="post_wrap">
            {data.slice(0, 30).map((id) => {
              return <StoryList key={id} id={id} />;
            })}
          </ul>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
export default Ask;
