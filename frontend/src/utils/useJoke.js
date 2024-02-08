import axios from "axios";
import { useEffect, useState } from "react";

const useJoke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const rapidKey = "75370bcb0dmshdf024307fb0108dp1b4ac4jsn26b27f924cb3";
    const endPoint = "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes";

    axios({
      method: "GET",
      url: endPoint,
      headers: {
        "X-RapidAPI-Key": rapidKey,
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((res) => {
        setJoke(res.data);
      })
      .catch((err) => {
        console.error("Error fetching: ", err);
      });
  }, []);

  return joke;
};

export default useJoke;
