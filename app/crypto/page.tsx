"use client"
import Header from "@/components/layout/header/Header";
import { useState,useEffect } from "react";
import GetCrypto from "@/components/containers/GetCryptos";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import axios from 'axios'
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const page = () => {
    // const [cryptos, setCryptos] = useState([]);
    // const [datas, setData] = useState([])
    // const [isLoading, setLoading] = useState(true)
   
    
    // useEffect(() => {
    //   const fetchdata=async()=>{
    //     // console.log("runnig")
    //     axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=6b12aa92-8d82-4bfe-994b-5e11fcaad7f6")
    //     .then((response)=>{
            // console.log(response.data.data);
            // setData(response.data.data);
        //     setLoading(false);
        // })
        // fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=6b12aa92-8d82-4bfe-994b-5e11fcaad7f6')
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);  
        //     setData(data.data)
        //     setLoading(false)
        //   })
          
      // }
      // console.log(datas)
    //   const intervalid=setTimeout(fetchdata,3000);

    //   return () => clearInterval(intervalid);
      
    // }, [])

  

    // console.log(datas.data)
  

    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await fetch(
    //           `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=6b12aa92-8d82-4bfe-994b-5e11fcaad7f6`,
             
    //         );
        
    //         console.log(response)
    //         const data = await response.json();
    //         console.log(data)
        
    //         // res.status(200).json({ data });
    //       };
        
    //       getData();
    // }, []);
   

    
  return (
    <div className="my-app">
      <Header />
      <main>
     <GetCrypto></GetCrypto>
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
