import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureSlider from "./FeatureSlider";
import About from "./About";
import Contact from "./Contact";
import BigSlider from "./BigSlider";
import Footer from "./Footer";
import FacebookBubble from "./FacebookBubble";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeatureSlider />
        <About />
        <BigSlider />
        <Contact />
        <Footer />
      </main>
      <FacebookBubble />
    </>
  );
}

export default App;
