import Container from "@/components/atoms/Container";
import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/header/Navbar";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <Footer />
      </Container>
    </main>
  );
}
