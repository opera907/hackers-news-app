export const Userpage = (props) => {
  const {
    match: {
      params: { name },
    },
  } = props;
  return (
    <section className="user_page">
      <h1>i'm on {name} page </h1>
    </section>
  );
};
