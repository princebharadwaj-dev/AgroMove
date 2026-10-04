import Nav from "@/components/Nav";
import About from "@/components/about";
import Footer from "@/components/footer";
import ForFarmers from "@/components/forFarmers";
import ForTransporters from "@/components/forTransporter";
import HomeSection from "@/components/home"; // Capital letter se start hone wala naam dein
import Numbers from "@/components/numbers";
import Works from "@/components/works";

export default function Page() {
  return (
    <>
      <Nav />
      <HomeSection />
      <Numbers />
      <Works />
      <About />
      <ForFarmers />
      <ForTransporters />
      <Footer />
    </>
  );
}