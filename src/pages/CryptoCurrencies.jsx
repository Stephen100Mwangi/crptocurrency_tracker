/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react'
import toast, { Toaster } from "react-hot-toast";
import millify from 'millify';
import PropTypes from 'prop-types'

const CryptoCurrencies = ({simplified}) => {

  const [coins,setCoins] = useState([]);
  const count = simplified? 10 :50;
  const [searchTerm,setSearchTerm] = useState('');


  useEffect(() => {
    const url = `https://coinranking1.p.rapidapi.com/coins?limit=${count}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0c3b1e74abmshd9cc3adb138d418p13a1e1jsn335e4367e25b",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    try {
      fetch(url,options).then(response => {
        if (!response.ok) {
          console.log("No response found");
          toast.error("No response found")
        }
        // toast.success("Response successfully sent.Please wait.")
        return response.json();
      }).then(result =>{
        // console.log(result);
        if (!result) {
          toast.error("No data found");
        }else{
          // toast.success("Data was found.Scroll down to view");
        }

        const topCoins = result.data.coins;
        // console.log(topCoins);
        setCoins(topCoins);
        const filteredCoin = topCoins.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCoins(filteredCoin);
      })
      
    } catch (error) {
      console.log("Error occurred while fetching data" + error);
    }
  
  }, [searchTerm,count])
  return (
    <div className='flex flex-col space-y-5 justify-start items-center w-full'>
      <Toaster />
      {
        !simplified && (
          <div className="filter flex justify-center items-center py-5">
            <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder='Search Cryptocurrency' className='px-6 p-2 shadow-lg mx-8 rounded-lg outline-1 outline-text' />
          </div>
        )
      }
      {
        !simplified &&(
          <div className='w-full flex items-center justify-center'>
            <h1 className="text-3xl font-bold openSans text-center mb-32">Top 10  Cryptocurrencies in the World</h1>
          </div>
        )
      }

      
      <div className="gap-6 gap-y-8 rounded-lg grid grid-cols-4">
      {
        coins.map((coin)=> (<div className='shadow-md rounded-lg p-6 flex flex-col space-y-5 min-w-[180px]' key={coin.uuid}>
         
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center justify-center space-x-1">
              <div className='text-sm font-mono'>{coin.rank}.</div>
              <div className='text-base font-medium'>{coin.name}</div>
            </div>
            <div><img width={32} src={coin.iconUrl} alt="" /></div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className='text-base font-normal'>Price: <span className='font-light'>{coin.change}</span></div>
            <div className='text-base font-normal'>Market Cap: <span className='font-light'>{millify(coin.price)}</span> </div>
            <div className='text-base font-normal'>Daily Change: <span className='font-light'>{millify(coin.change)}%</span></div>
          </div>
         
        
        </div>))

      }
      </div>
      
    </div>
  )
}

CryptoCurrencies.propTypes = {
  simplified: PropTypes.bool
}

export default CryptoCurrencies
