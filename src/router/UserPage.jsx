import { useGetUserbyNameQuery } from "../services/api";

export const Userpage = (props) => {
  const {
    match: {
      params: { name },
    },
  } = props;
  const { data, isLoading, error } = useGetUserbyNameQuery(name);
  console.log(data);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <section className="user_page">
          <h1>i'm on {data.id} page </h1>
        </section>
      )}
    </>
  );
};
