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
export default New;
