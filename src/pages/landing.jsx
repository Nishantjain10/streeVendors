import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Issues from "../components/issues";
import Solution from "../components/solution";
import Join from "../components/joinus"
import Footer from "../components/footer";

function Landing() {
  return (
    <div className="">
        <div className="App">
            <Navbar />
            <Hero />
            <Issues />
            <Solution />
            <Join />
            <Footer />
        </div>
    </div>
  );
}

export default Landing;