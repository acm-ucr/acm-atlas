import Hackathon from "@/components/hacks/hackathon";
import { designverse } from "@/data/hackathons";

const Designverse = () => {
  return (
    <Hackathon
      name={designverse.name}
      website={designverse.website}
      logo={designverse.logo}
      description={designverse.description}
      description2={designverse.description2}
      subtitle={designverse.subtitle}
      bgColor={designverse.bgColor}
      textColor={designverse.textColor}
      carouselItems={designverse.carouselItems}
      devposts={designverse.devposts}
      stats={designverse.stats}
      instagram={designverse.instagram}
      email={designverse.email}
    />
  );
};

export default Designverse;
