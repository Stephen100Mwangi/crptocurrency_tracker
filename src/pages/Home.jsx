/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics";
import toast, { Toaster } from "react-hot-toast";
import millify from "millify";
import { Link } from 'react-router-dom';

// import { useGetCryptosQuery } from "../services/CryptoAPI";
import CryptoCurrencies from "./CryptoCurrencies";
import Details from "./Details";
import News from "./News";

const Home = () => {
  const [dataStatus, setData] = useState([]);

  useEffect(() => {
    const url = "https://coinranking1.p.rapidapi.com/coins?limit=10";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0c3b1e74abmshd9cc3adb138d418p13a1e1jsn335e4367e25b",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const news_url = `https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk`;
    const news_options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c3b1e74abmshd9cc3adb138d418p13a1e1jsn335e4367e25b",
        "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
      },
    };

    try {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            console.log("Response not found");
          }
          return response.json();
        })
        .then((result) => {
          setData(result.data.stats);
        });
    } catch (error) {
      console.error(error);
    }

    try {
      fetch(news_url,news_options)
        .then((response) => {
          if (!response.ok) {
            console.log("Response not found");
          }
          return response.json();
        })
        .then((result) => {
          // setData(result.data.stats);
        });
      
    } catch (error) {
      console.error(error);
    }
  },[]);

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col space-y-20 p-8">
      <h1 className="text-3xl font-bold">Global Crypto Stats</h1>
      {loading && (
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      )}
      <div className="flex gap-10 flex-wrap justify-center items-center mb-20">
        <Statistics
          title="Total Cryptocurrencies"
          stat={dataStatus.total}
        ></Statistics>
        <Statistics
          title="Total Exchanges"
          stat={millify(dataStatus.totalExchanges)}
        ></Statistics>
        <Statistics
          title="Total Market Cap"
          stat={millify(dataStatus.totalMarketCap)}
        ></Statistics>
        <Statistics
          title="Total 24h Volume"
          stat={millify(dataStatus.total24hVolume)}
        ></Statistics>
        <Statistics
          title="Total Markets"
          stat={millify(dataStatus.totalMarkets)}
        ></Statistics>
      </div>

      {/* Top Cryptocurrencies */}
      <div className="flex flex-col space-y-16">
        <h1 className="text-3xl font-bold openSans">Top 10 Cryptocurrencies in the World</h1>
        <h1 className="mb-48 cursor-pointer text-xl titillium border w-fit p-2 px-6 rounded-full hover:outline text-text shadow-lg bg-none"><Link to='/crypto'>Show More</Link></h1>
      </div>
      <CryptoCurrencies simplified />

      {/* News */}
      <div className="flex flex-col space-y-16">
        <h1 className="text-3xl font-bold openSans">Latest Cryptocurrencies News</h1>
        <h1 className="mb-48 cursor-pointer text-xl titillium border w-fit p-2 px-6 rounded-full hover:outline text-text shadow-lg bg-none"><Link to='/news'>Show More</Link></h1>
      </div>
      <News simplified />
    </div>
  );
};

export default Home;
