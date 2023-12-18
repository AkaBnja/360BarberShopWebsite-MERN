import Hero from "./layout/homeComponents/Hero";
import Services from "./layout/homeComponents/Services";
import Barber from "./layout/homeComponents/Barber";
import Location from "./layout/homeComponents/Location";

function Home() {
  return (
    <div>
      <Hero />
      <Barber />
      <Services />
      <Location />
    </div>
  );
}

export default Home;
