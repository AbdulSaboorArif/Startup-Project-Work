import Hero from "./components/hero";

import WhyChooseUs from "./components/why-chouse-us";
import BestServices from "./components/best-services";
import Subscription from "./components/subsription-plane";
import AiAgents from "./AI-Agents/page";
import ExploreAIAgents from "./components/explore-agents";
// import LatestProjects from "./components/Explor-Agents";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
        <BestServices />
        <WhyChooseUs />
        <ExploreAIAgents />
        <Subscription />
        {/* <LatestProjects /> */}
      </section>
    </main>
  );
}
