import StoryList from "../components/storyList/StoryList";
import { useEffect } from "react";
import { useGetPostsByTypeQuery } from "../services/api";

const New = (props) => {
  //const { loading, newList } = DataFetcher("new");
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("new");

  return (
    <>
      {!isLoading ? (
        <section className="new_page">
          <div className="hero">
            <img
              src={require("../assets/banner/new_banner.png")}
              alt="hero_img"
            />
          </div>

          <h1>new story</h1>
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
export default New;
