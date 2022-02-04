import { useGetItembyIdQuery } from "../services/api";

export const List = ({ id }) => {
  const { data, isLoading, error } = useGetItembyIdQuery(id);
  console.log(data);

  return (
    <>
      {isLoading ? (
        "loaing..."
      ) : (
        <li>
          <h3 className="title">{data.title}</h3>
          <strong>{data.by}</strong>
        </li>
      )}
    </>
  );
};

export default List;
