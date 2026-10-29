import Hero from "./components/Hero";
import StatsTicker from "./components/StatsTicker";
import Campaign from "./components/home/Campaign";
import Challenge from "./components/home/Challenge";
import Mission from "./components/home/Mission";
import Partners from "./components/home/Partners";
import Programmes from "./components/home/Programmes";
import StudentStories from "./components/home/StudentStories";
import Team from "./components/home/Team";
import WhyWeExist from "./components/home/WhyWeExist";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsTicker />
      <WhyWeExist />
      <Challenge />
      <Mission />
      <Programmes />
      <Campaign />
      <StudentStories />
      <Team />
      <Partners />
    </>
  );
}
