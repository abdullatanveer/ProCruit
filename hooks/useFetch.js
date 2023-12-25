import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from ".env";

// const rapidapikey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key":'e41d882e11msh1daf137277a8b0dp1227fbjsnc711752aea65',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };
  const fetchData = async  () => {
    try {
      const response =  await axios.request(options);
       
      setData(response.data.data);
      setisloading(false);
    } catch (error) {
      setError(error);
       console.log(error);
    } finally {
      setisloading(false);
    }
  };
  useEffect(()=>{
    fetchData();
},[])
const refetch=()=>{
    setisloading(true);
    fetchData();
 }
 return {data,isloading,error,refetch};
};

export default useFetch;
 
