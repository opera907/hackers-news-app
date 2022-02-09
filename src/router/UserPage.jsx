import StoryList from "../components/storyList/StoryList";
import { useGetUserbyNameQuery } from "../services/api";
import { Category } from "./../components/category/Category";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNews } from "../services/testSlice";
import { getAllNews } from "./../services/testSlice";

export const Userpage = (props) => {
  const {
    match: {
      params: { name },
    },
  } = props;
  const { data, isLoading, error } = useGetUserbyNameQuery(name);
  const [pannel, setPannel] = useState("story");
  const handleClick = (e) => setPannel(e.target.value);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(addNews(data));
  // }, []);
  //const { submitted } = useSelector((state) => state.news.news);
  console.log(data);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <section className="user_page">
          <h1>i'm on {data.id} page </h1>
          <Category
            handleClick={handleClick}
            pannel={pannel}
            value={["submitted", "comments"]}
          />
          {data.submitted.map((id) => {
            return <StoryList key={id} id={id} />;
          })}
        </section>
      )}
    </>
  );
};
