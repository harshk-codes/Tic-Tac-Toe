/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../backend/server';
import "../assets/styles/waiting.css";

const Waiting = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const rapidApiKey = API_KEY;
        const apiEndpoint = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';

        axios({
            method: 'GET',
            url: apiEndpoint,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
            },
        })
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.error("Error fetching data: ", err);
        });
    }, []);

    return (
  <>
    <div className="wait-container">
      <div className="title-container">
        <h1>hang on, waiting for other player</h1>
          <span className="loading__dot"></span>
          <span className="loading__dot"></span>
          <span className="loading__dot"></span>
      </div>

      <div className="joke-container">
        <h1>Here's a dad joke👇</h1>
         <h3>{data && <h3>{data[0].joke}</h3>}</h3>
      </div>
    </div>
  </>
);
};

export default Waiting;
