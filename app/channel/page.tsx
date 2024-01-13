import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import BlogDetails from "@/components/containers/blog/BlogDetails";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Image from "next/image";
import image from "@/public/images/home-six/video-channel.jpeg";
import poster from "@/public/images/blog-details/poster.png";
import one from "@/public/images/blog-details/info-one.png";
import two from "@/public/images/blog-details/info-two.png";
import { userComments } from "@/public/data/comments";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title=" Conomis Video Channel" />
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
                <span className="cate">Media</span>
                <span className="time">01 January 2024</span> -
                <span className="r-time">2 min read</span>
              </div>
              <div className="text-group slide-top">
                <h2 className="title-animation fw-7 text-white">
                Dive into our extensive video library, featuring tutorials, expert interviews, and exclusive content.
Our channel is your go-to source for learning and exploring the complexities of the crypto world.
                </h2>
                <p>
                This platform offers a variety of content related to cryptocurrencies, blockchain, and digital art,
including educational tutorials, industry interviews, and market analysis. It serves as a central
resource for learning and staying updated in the digital asset space.
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
