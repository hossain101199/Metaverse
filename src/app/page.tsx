import Container from "@/components/atoms/Container";
import About from "@/components/molecules/About";
import HeroSection from "@/components/molecules/HeroSection";
import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/header/Navbar";
import Explore from "@/components/molecules/Explore";
import GetStarted from "@/components/molecules/GetStarted";
import WhatsNew from "@/components/atoms/WhatsNew";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <HeroSection />
        <About />
        <Explore />
        <GetStarted />
        <WhatsNew />
        <Footer />
      </Container>
    </main>
  );
}
