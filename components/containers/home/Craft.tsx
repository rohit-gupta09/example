import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/* <span className="sub-title">AI Image</span> */}
              <h2 className="title title-animation">
              Welcome to Conomis ? Where Innovation Meets Digital Artistry
              </h2>
              <p>
              At Conomis, we are pioneering the fusion of technology and creativity, crafting a unique digital
landscape that transcends traditional boundaries. Our platform is dedicated to exploring the endless
possibilities of blockchain, NFTs, and immersive technologies, fostering a community where artists,
creators, and enthusiasts converge.
              </p>
              <div className="section__content-cta">
                {/* <Link href="shop" className="btn btn--primary">
                  Get started
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <img src="images/craft-thumb.png" alt="Image"  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <img src="images/footer/shape-one.png" alt="Image" />
      </div>
    </section>
  );
};

export default Craft;
