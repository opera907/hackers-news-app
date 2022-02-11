import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "../components/storyList/StoryList";

const Show = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("show");

  return (
    <>
      {!isLoading ? (
        <section className="show_page">
          <div className="hero">
            <img
              src={require("../assets/banner/show_banner.png")}
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
export default Show;
