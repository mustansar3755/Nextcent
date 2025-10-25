import {
  Hero,
  Navbar,
  Client,
  Community,
  Stats,
  SiteFooter,
  Customer,
  Blogs,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
      {/* Others */}
      <Client />
      <Community />
      <Stats />
      <SiteFooter />
      <Customer />
      <Blogs />
    </div>
  );
};

export default App;
