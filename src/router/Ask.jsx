import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "../components/storyList/StoryList";

const Ask = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("ask");

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
