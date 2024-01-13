"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const Overview = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);

  return (
    <section className="section overview pb-0 ">
      <div className="container">
        <div className="title title-animation" style={{display:"flex",justifyContent:"center",alignItems:"center",width:'100%',marginTop:"20px",marginBottom:"20px"}}>
          <h1>Our Offerings</h1>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 0 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="overview__thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>Text-to-Image Technology</h4>
                <p className="tertiary-text">
                Harnessing the power of AI, we transform your ideas into stunning visual realities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 1 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="overview__thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>NFT Gallery</h4>
                <p className="tertiary-text">
                Discover a world of digital artistry in our NFT Gallery. Here, unique digital creations are not just
viewed; they are experienced
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 2 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="overview__thumb">
                <Image src={three} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>NFT Marketplace and Launchpad</h4>
                <p className="tertiary-text">
                Conomis is the destination for
buying, selling, and exploring the world of NFTs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 3 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(3)}
            >
              <div className="overview__thumb">
                <Image src={four} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4> Insightful Blog and Crypto News</h4>
                <p className="tertiary-text">
                Stay ahead of the curve with our in-depth blog and up-to-the-minute crypto news.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 4 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(4)}
            >
              <div className="overview__thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4> Conomis Video Channel</h4>
                <p className="tertiary-text">
                Dive into our extensive video library, featuring tutorials, expert interviews, and exclusive content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 5 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(5)}
            >
              <div className="overview__thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4> Immersive VR Experiences</h4>
                <p className="tertiary-text">
                Step into our Virtual Reality space, where the digital and physical realms merge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
