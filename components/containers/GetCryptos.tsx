"use client";
import { useState,useEffect } from "react";
import axios from "axios";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const GetCrypto = () => {
    const [datas, setData] = useState<any[]>([])
    const [isLoading, setLoading] = useState(true)
   
    
    useEffect(() => {
      const fetchdata=async()=>{
        // console.log("runnig")
        axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=6b12aa92-8d82-4bfe-994b-5e11fcaad7f6")
        .then((response)=>{
            console.log(response.data.data);
            setData(response.data.data);
            setLoading(false);
        })
        // fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=6b12aa92-8d82-4bfe-994b-5e11fcaad7f6')
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);  
        //     setData(data.data)
        //     setLoading(false)
        //   })
          
      }
      // console.log(datas)
      const intervalid=setTimeout(fetchdata,3000);

      return () => clearInterval(intervalid);
      
    }, [])

  return (
    <>
     <CommonBanner title="Crypto News" />
        <div className="" style={{minHeight:"100vh",overflowX:"hidden",color:"white",backgroundColor:"#030015"}}>
        <TableContainer component={Paper} style={{backgroundColor:"#030015",color:"white"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"#65ff4b",fontWeight:"900"}}>Name</TableCell>
            <TableCell align="center" style={{color:"#65ff4b",fontWeight:"900"}}>CMC_RANK</TableCell>
            <TableCell align="center" style={{color:"#65ff4b",fontWeight:"900"}}>SYMBOL</TableCell>
            <TableCell align="center" style={{color:"#65ff4b",fontWeight:"900"}}>Price</TableCell>
            <TableCell align="center" style={{color:"#65ff4b",fontWeight:"900"}}>Total Supply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((dat) => (
            <TableRow key={dat.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{color:"white"}}>
                {dat.name}
              </TableCell>
              <TableCell align="center" style={{color:"white"}}>{dat.cmc_rank}</TableCell>
              <TableCell align="center" style={{color:"white"}}>{dat.symbol}</TableCell>
              <TableCell align="center" style={{color:"white"}}>{dat.quote.INR.price}</TableCell>
              <TableCell align="center" style={{color:"white"}}>{dat.total_supply}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </>
  );
};

export default GetCrypto;
