import StoryList from "./../components/StoryList";
import { useState } from "react";
import { useEffect } from "react";
import { useGetPostsByTypeQuery } from "../services/api";
const New = (props) => {
  //const { loading, newList } = DataFetcher("new");
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("new");

  const [pannel, setPannel] = useState("story");
  const handleClick = (e) => setPannel(e.target.value);
  console.log(pannel);
  console.log(data);
  return (
    <>
      {!isLoading ? (
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
              ? data.slice(0, 30).map((id) => {
                  return <StoryList key={id} id={id} />;
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
