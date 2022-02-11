import { useGetPostsByTypeQuery } from "../services/api";
import StoryList from "../components/storyList/StoryList";

const Job = (props) => {
  const { data, error, isFetching, isLoading } = useGetPostsByTypeQuery("job");
  //console.log(data);
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <section className="job_page">
          <div className="hero">
            <img
              src={require("../assets/banner/job_banner.png")}
              alt="hero_img"
            />
          </div>
          <ul className="post_wrap">
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
