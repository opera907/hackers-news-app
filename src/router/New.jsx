import DataFetcher from "../hooks/dataFetcher";
import StoryList from "./../components/StoryList";
import { useState } from "react";
import { useEffect } from "react";

const New = (props) => {
  const { loading, newList } = DataFetcher("new");
  const [pannel, setPannel] = useState("story");
  const handleClick = (e) => setPannel(e.target.value);
  console.log(pannel);

  return (
    <>
      {loading ? (
        <section className="new_page">
          <div className="hero">
            <img src="" alt="hero_img" />
          </div>
          <div>
            <button onClick={handleClick} value="story">
              story
            </button>
            <button onClick={handleClick} value="user">
              user
            </button>
          </div>
          <h1>new story</h1>
          <div className="filter">
            <select name="" id="dd">
              <option value="dd"></option>
            </select>
          </div>
          <ul>
            {pannel === "story"
              ? newList.map(({ data: storyData }) => {
                  return <StoryList key={storyData.id} story={storyData} />;
                })
              : "user"}
          </ul>
        </section>
      ) : (
        "loadong"
      )}
    </>
  );
};
export default New;
