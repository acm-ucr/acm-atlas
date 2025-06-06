import Hackathon from "@/components/hacks/hackathon";
import { cutiehack } from "@/data/hackathons";

const Cutiehack = () => {
  return (
    <Hackathon
      name={cutiehack.name}
      website={cutiehack.website}
      logo={cutiehack.logo}
      description={cutiehack.description}
      description2={cutiehack.description2}
      subtitle={cutiehack.subtitle}
      bgColor={cutiehack.bgColor}
      textColor={cutiehack.textColor}
      carouselItems={cutiehack.carouselItems}
      devposts={cutiehack.devposts}
      stats={cutiehack.stats}
      instagram={cutiehack.instagram}
      email={cutiehack.email}
    />
  );
};

export default Cutiehack;
