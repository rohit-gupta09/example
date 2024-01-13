import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import BlogDetails from "@/components/containers/blog/BlogDetails";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Image from "next/image";
import image from "@/public/images/home-six/image.jpeg";
import poster from "@/public/images/blog-details/poster.png";
import one from "@/public/images/blog-details/info-one.png";
import two from "@/public/images/blog-details/info-two.png";
import { userComments } from "@/public/data/comments";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Revolutionary Text-to-Image Technology" />
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
                <span className="cate">Metaverse</span>
                <span className="time">27 September 2024</span> -
                <span className="r-time">2 min read</span>
              </div>
              <div className="text-group slide-top">
                <h2 className="title-animation fw-7 text-white">
                Harnessing the power of AI, we transform your ideas into stunning visual realities. Our
state-of-the-art text-to-image technology is a gateway for creators to visualize and materialize their
imaginations
              
                </h2>
                
                 
                <p>
                Conomis leverages AI-driven text-to-image technology, enabling the transformation of text into
images. This tool is valuable for artists, advertisers, and educators, providing a means to create
unique artworks and innovative marketing materials.

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
