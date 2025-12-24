import HeroSlider from "./components/HeroSlider";
import FeatureCards from "./components/FeatureCards";
import Vision2030 from "./components/Vision2030";
import AboutUs from "./components/AboutUs";
import EconomicWeek from "./components/EconomicWeek";
import InvestmentDestination from "./components/InvestmentDestination";
import BlogPosts from "./components/BlogPosts";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <FeatureCards />
      <Vision2030 />
      <AboutUs />
      <EconomicWeek />
      <InvestmentDestination />
      <BlogPosts />
    </main>
  );
}
