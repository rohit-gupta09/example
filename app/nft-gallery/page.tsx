import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import BlogDetails from "@/components/containers/blog/BlogDetails";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Image from "next/image";
import image from "@/public/images/home-six/gallery.jpeg";
import poster from "@/public/images/blog-details/poster.png";
import one from "@/public/images/blog-details/info-one.png";
import two from "@/public/images/blog-details/info-two.png";
import { userComments } from "@/public/data/comments";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="NFT Gallery" />
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
                <span className="cate">BlockchainI</span>
                <span className="time">29 June 2024</span> -
                <span className="r-time">2 min read</span>
              </div>
              <div className="text-group slide-top">
                <h2 className="title-animation fw-7 text-white">
                Discover a world of digital artistry in our NFT Gallery. Here, unique digital creations are not just
viewed; they are experienced, each piece telling its own story, authenticated and immortalized on
the blockchain
                </h2>
                <p>
                The Conomis NFT Gallery showcases digital artworks as Non-Fungible Tokens. It offers an
immersive experience, allowing users to interact with and learn the story behind each art piece. It
connects artists with a global audience and enables collectors to discover and acquire unique digital
art.

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
