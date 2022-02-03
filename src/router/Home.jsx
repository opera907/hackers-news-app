import DataFetcher from "../hooks/dataFetcher";
import StoryList from "../components/StoryList";
import { useState } from "react";
import { useEffect } from "react";

const Home = (props) => {
  const { loading, newList } = DataFetcher("best");

  return (
    <>
      {loading ? (
        <section className="new_page">
          <div className="hero">
            <img src="" alt="hero_img" />
          </div>
          <h1>best story</h1>
          <div className="filter">
            <select name="" id="dd">
              <option value="dd"></option>
            </select>
          </div>
          <ul>
            {newList.map(({ data: storyData }) => {
              return (
                <StoryList key={storyData.id} story={storyData} time="min" />
              );
            })}
          </ul>
        </section>
      ) : (
        "loadong"
      )}
    </>
  );
};
export default Home;
