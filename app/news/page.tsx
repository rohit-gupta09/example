import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import GetNews from "@/components/containers/GetNews";

const page = () => {
    const handleGetNewsClick = () => {
        console.log('Hello');
      };


  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Crypto News" />
        <GetNews></GetNews>
      </main>
      {/* <FooterTwo /> */}
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

