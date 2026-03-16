import Pricing from "./component/Pricing";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Features from "./component/Features";

export default function App() {
  return (
 <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
  <Navbar/>
  <Hero/>
  <Features/>
  <Pricing/>
  <Testimonials/>
  <Footer/>
 </div>
  )
}
  
