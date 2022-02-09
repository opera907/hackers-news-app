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
          <h1>top story</h1>
          <div className="filter">
            <select name="" id="dd">
              <option value="dd"></option>
            </select>
          </div>
          <ul>
            {data.slice(0, 30).map((id) => {
              return <StoryList key={id} id={id} />;
            })}
          </ul>
        </section>
      ) : (
        "loadong"
      )}
    </>
  );
};
export default Show;
