import Header from "@/components/layout/header/Header";
// import Buy from "@/components/containers/marketplace/buy";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
       {/* <Buy/> */}
      </main>
      <FooterTwo />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
