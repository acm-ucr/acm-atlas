import Hackathon from "@/components/hacks/hackathon";
import { citrushack } from "@/data/hackathons";

const CitrusHack = () => {
  return (
    <Hackathon
      name={citrushack.name}
      website={citrushack.website}
      logo={citrushack.logo}
      description={citrushack.description}
      description2={citrushack.description2}
      subtitle={citrushack.subtitle}
      bgColor={citrushack.bgColor}
      textColor={citrushack.textColor}
      carouselItems={citrushack.carouselItems}
      devposts={citrushack.devposts}
      stats={citrushack.stats}
      instagram={citrushack.instagram}
      email={citrushack.email}
    />
  );
};

export default CitrusHack;
