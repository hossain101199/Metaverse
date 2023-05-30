import Container from "@/components/atoms/Container";
import About from "@/components/molecules/About";
import HeroSection from "@/components/molecules/HeroSection";
import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/header/Navbar";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <HeroSection />
        <About />
        <Footer />
      </Container>
    </main>
  );
}
