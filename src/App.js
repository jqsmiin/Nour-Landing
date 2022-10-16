import NavScroll from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import PricingPlan from "./sections/PricingPlan";
import WhyUs from "./sections/WhyUs";
import Blog from "./sections/Blog";
import Testimonial from "./sections/Testimonial";
import Contact from './sections/Contact'
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <NavScroll />
      <Hero />
      <Services />
      <About />
      <PricingPlan />
      <WhyUs />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
