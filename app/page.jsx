// ** Import Components
import Banner from "@/components/Banner/Banner";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";

const LandingPage = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />

        <Banner />

        <About />
      </div>
    </main>
  );
};

export default LandingPage;
