import {
  FooterBanner,
  FooterMessage,
  HeroDonate,
  Navbar,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroDonate />
      <FooterBanner />
      <FooterMessage />
      <Footer />
    </div>
  );
};

export default Home;
