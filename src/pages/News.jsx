/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import moment from 'moment'

const News = ({ simplified }) => {
  const [news, setNews] = useState([]);
  const count = simplified ? 10 : 50;

  useEffect(() => {
    const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "59c460cfbamshd055f94e95fd57cp1c711ajsncf2888be7245",
        "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
      },
    };

    try {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            toast.error("No response found");
            console.log("No response found");
            // return response.status(400).send({ error: "No response found" });
          }
          console.log("Response successful");
          return response.json();
        })
        .then((result) => {
          if (!result) {
            toast.error("No data found");
          }
          console.log(result);
          console.log(result.data);
          setNews(result.data);
        });
    } catch (error) {
      console.log("Error");
      toast.error("Internal Server error occurred");
    }
  }, [count]);
  return (
    <div className="flex flex-col space-y-5 justify-start p-6 items-center w-full">
      {!simplified && (
        <h1 className="text-3xl font-bold openSans w-full text-center">
          Latest Cryptocurrencies News
        </h1>
      )}
      <div className="grid grid-cols-2 gap-5 gap-y-16 rounded-lg">
        {news.map((newsItem, index) => (
          <div
            key={index}
            className="shadow-xl p-6 w-auto flex flex-col items-center justify-center"
          >
            <div className="font-bold text-lg text-text mb-5">
              {newsItem.title}
            </div>
            <div className="font-light text-base mb-10">
              {newsItem.description}
            </div>
            <div className="w-[80%] flex items-center justify-center">
              <img src={newsItem.thumbnail} alt="" />
            </div>
            <p>{moment(newsItem.createdAt).startOf('ss').fromNow()}</p>
            <a
              href={newsItem.url}
              target="_blank"
              className="text-sm mt-5 font-bold hover:text-text"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

News.propTypes = {
  simplified: PropTypes.bool,
};

export default News;
