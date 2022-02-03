import { getStories } from "./../utils/apis";
import { useEffect, useState } from "react";

const DataFetcher = (type) => {
  const [loading, setLoading] = useState(false);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    getStories(type).then((res) => {
      setNewList(res);
      setLoading(true);
    });
  }, [type]);

  return { loading, newList };
};

export default DataFetcher;
