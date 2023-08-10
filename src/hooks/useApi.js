import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://dummyjson.com";

const useApi = (endpoint) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoaded(false);

    const fetchData = () => {
      axios
        .get(`${baseURL}/${endpoint}`)
        .then((response) => {
          setIsLoaded(true);
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [endpoint]);

  return { error, isLoaded, data };
};

export default useApi;
