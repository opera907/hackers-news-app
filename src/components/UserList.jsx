import { useGetItembyIdQuery, useGetUserbyNameQuery } from "../services/api";
import { useEffect } from "react";
import { useState } from "react";

export const UserList = ({ id }) => {
  const [post, setPosts] = useState([]);

  // const { data: userData, isLoading } = useGetUserbyNameQuery(by);
  // const { id: userId, karma } = userData;
  return (
    <>
      {/* {isLoading ? (
        "loading"
      ) : (
        <div>
          <h2>{id} </h2>
          <span>{karma}</span>
        </div>
      )} */}
    </>
  );
};

export default UserList;
