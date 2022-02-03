import DataFetcher from "./../hooks/dataFetcher";

const Top = (props) => {
  const { loading, newList } = DataFetcher("top");
  console.log(loading);
  return (
    <>
      {loading ? (
        <div>
          <h1>top story</h1>
          <ul>
            {newList.map(({ data }) => (
              <li key={data.id}>title: {data.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        "loadong"
      )}
    </>
  );
};
export default Top;
