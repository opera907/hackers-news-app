import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "../components/storyList/StoryList";
import { List } from "./../components/List";

const Job = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("job");
  //console.log(data);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <section className="job_page">
          <div className="hero">
            <img
              src={require("../assets/banner/job_banner.png")}
              alt="hero_img"
            />
          </div>
          <h1>job story</h1>
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
      )}
    </>
  );
};
export default Job;
