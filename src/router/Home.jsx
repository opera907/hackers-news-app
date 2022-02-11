import { useGetPostsByTypeQuery } from "../services/api";

const Home = (props) => {
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
