"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
interface Article {
  url: string;
  urlToImage: string;
  author: string;
  title: string;
}
const GetNews = () => {
  const [dataAI,setDataAI] = useState([]);  
  const [dataCrypto,setDataCrypto] = useState([]);  
  const [isCrypto, setIsCrypto] = useState(false);
    const getCrypto = async() =>{
        axios.get("https://newsapi.org/v2/everything?q=Crypto&from=2023-12-31&to=2023-12-31&sortBy=popularity&apiKey=94e74322dfba4451b4538f9f95b0d091")
        .then((response)=>{
            console.log(response);
            setDataCrypto(response.data.articles);
        })
    }
    const getAI = async() =>{
        axios.get("https://newsapi.org/v2/everything?q=AI&from=2023-12-31&to=2023-12-31&sortBy=popularity&apiKey=94e74322dfba4451b4538f9f95b0d091")
        .then((response)=>{
            console.log(response);
            setDataAI(response.data.articles);
        })
    }
    
    const getNews = () =>{
        console.log("hello");
    }
  return (
    <>
      <section className="section pricing pb-0 fade-wrapper pr-i">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 col-xxl-6">
              <div className="section__header text-center">
                <div className="section__content-cta">
                  <button
                    aria-label="get monthly price"
                    className={
                      "price-btn monthly-price " +
                      (isCrypto ? " " : " price-btn-active")
                    }
                    onClick={() => {
                      setIsCrypto(true);
                      getCrypto();
                    }}
                  >
                    Crypto
                  </button>
                  <button
                    aria-label="get annual price"
                    className={
                      "price-btn Crypto-price " +
                      (isCrypto ? " price-btn-active" : " ")
                    }
                    onClick={() => {
                      setIsCrypto(false);
                      getAI();
                    }}
                  >
                    AI
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <section className="news-alter m-news-alter section fade-wrapper">
              <div className="container">
                <div className="row gaper">
                  {isCrypto
                    ? dataCrypto.map((value: Article) => (
                        <div
                          className="col-12 col-md-6 col-xl-4 fade-top"
                          key={value.url}
                        >
                          <div className="news-alter__single topy-tilt">
                            <div className="thumb">
                              <Link href={value.url}>
                                <img
                                  src={value.urlToImage}
                                  alt="Image"
                                  width={300}
                                  height={200}
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <div className="meta">
                                <span className="author">Author:</span>
                                <span className="time">{value.author}</span>
                              </div>
                              <h4>
                                <Link href={value.url}>{value.title}</Link>
                              </h4>
                              <div className="cta">
                                <Link href={value.url}>Learn More</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : dataAI.map((value: Article) => (
                        <div
                          className="col-12 col-md-6 col-xl-4 fade-top"
                          key={value.url}
                        >
                          <div className="news-alter__single topy-tilt">
                            <div className="thumb">
                              <Link href={value.url}>
                                <img
                                  src={value.urlToImage}
                                  alt="Image"
                                  width={300}
                                  height={200}
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <div className="meta">
                                <span className="author">Author:</span>
                                <span className="time">{value.author}</span>
                              </div>
                              <h4>
                                <Link href={value.url}>{value.title}</Link>
                              </h4>
                              <div className="cta">
                                <Link href={value.url}>Learn More</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="section__cta"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetNews;