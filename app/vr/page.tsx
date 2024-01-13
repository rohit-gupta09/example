import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import BlogDetails from "@/components/containers/blog/BlogDetails";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Image from "next/image";
import image from "@/public/images/home-six/vr.jpeg";
import poster from "@/public/images/blog-details/poster.png";
import one from "@/public/images/blog-details/info-one.png";
import two from "@/public/images/blog-details/info-two.png";
import { userComments } from "@/public/data/comments";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Immersive VR Experiences" />
        {/* <BlogDetails /> */}
        <section className="section b-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8">
            <div className="b-details__content sticky-item">
              <div className="poster poster-img slide-top">
                <Image src={image} alt="Image" priority />
              </div>
              <div className="b-details-meta">
                <span className="cate">AI</span>
                <span className="time">26 December 2024</span> -
                <span className="r-time">2 min read</span>
              </div>
              <div className="text-group slide-top">
                <h2 className="title-animation fw-7 text-white">
                Step into our Virtual Reality space, where the digital and physical realms merge. Experience art,
attend virtual events, and interact with a global community in an entirely new dimension.
                </h2>
                <p>
                Conomis is developing VR experiences to merge digital and physical worlds. This initiative will
include virtual art exhibitions, educational sessions, and digital meetups, offering users a novel way
to experience digital art and blockchain-based projects.

                </p>
              </div>
              
              
              
            </div>
          </div>
          <div className="col-12 col-lg-4">
          </div>
        </div>
      </div>
    </section>
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
