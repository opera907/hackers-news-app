import { getUser } from "../utils/apis";
import { useEffect, useState } from "react";

export const UserFetcher = (by) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(by).then((res) => {
      const obj = res;
      //console.log(obj.data);
      setUser(obj.data);
      setLoading(true);
    });
  }, []);
  return { loading, user };
};
