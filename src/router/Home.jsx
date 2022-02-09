import StoryList from "../components/storyList/StoryList";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllNews } from "../services/testSlice";

const Home = (props) => {
  //const { loading, newList } = DataFetcher("best");

  return (
    <>
      <section className="new_page">
        <div className="hero">
          <img
            src={require("../assets/banner/home_banner.png")}
            alt="hero_img"
          />
        </div>
        <h1>best story</h1>
        <div className="filter">
          <select name="" id="dd">
            <option value="dd"></option>
          </select>
        </div>
        <ul></ul>
      </section>
    </>
  );
};
export default Home;
