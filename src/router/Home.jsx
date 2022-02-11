import StoryList from "../components/storyList/StoryList";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllNews } from "../services/testSlice";
import { useGetPostsByTypeQuery } from "../services/api";

const Home = (props) => {
  //const { loading, newList } = DataFetcher("best");
  const { data: topData } = useGetPostsByTypeQuery("top");
  const { data: newData } = useGetPostsByTypeQuery("new");
  const { data: showData } = useGetPostsByTypeQuery("show");
  const { data: askData } = useGetPostsByTypeQuery("ask");
  const { data: jobData, isLoading } = useGetPostsByTypeQuery("job");

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <section className="new_page">
          <div className="hero">
            <img
              src={require("../assets/banner/home_banner.png")}
              alt="hero_img"
            />
          </div>
          <ul></ul>
        </section>
      )}
    </>
  );
};
export default Home;
