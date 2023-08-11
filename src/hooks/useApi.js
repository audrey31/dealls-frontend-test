import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (endpoint) => {
  const baseURL = "https://dummyjson.com";
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoaded(false);

    const fetchData = () => {
      axios
        .get(`${baseURL}/${endpoint}`)
        .then((response) => {
          setData(response.data);
          setIsLoaded(true);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [endpoint]);

  return { error, isLoaded, data };
};

const useApiOnce = (endpoint) => {
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
          console.log("from hook", response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, []);

  return { error, isLoaded, data };
};

export { useApi, useApiOnce };
