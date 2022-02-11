import { useState } from "react";
import Category from "../components/category/Category";
import UserList from "../components/UserList";
import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "../components/storyList/StoryList";

const Top = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("top");
  const [pannel, setPannel] = useState("post");
  const handleClick = (e) => setPannel(e.target.value);

  return (
    <>
      {!isLoading ? (
        <section className="new_page">
          <div className="hero">
            <img
              src={require("../assets/banner/top_banner.png")}
              alt="hero_img"
            />
          </div>
          <div className="content">
            <Category
              handleClick={handleClick}
              pannel={pannel}
              value={["post", "user"]}
            />

            <ul className="post_wrap">
              {pannel === "post"
                ? data.slice(0, 30).map((id) => {
                    return <StoryList key={id} id={id} />;
                  })
                : data.slice(0, 30).map((id) => <UserList key={id} id={id} />)}
            </ul>
          </div>
        </section>
      ) : (
        "loadong"
      )}
    </>
  );
};
export default Top;
