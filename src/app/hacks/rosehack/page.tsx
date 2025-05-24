import Hack from "@/components/hacks/hack";
import { rosehack } from "@/data/hackathons";

const RoseHack = () => {
  return (
    <Hack
      name={rosehack.name}
      website={rosehack.website}
      logo={rosehack.logo}
      description={rosehack.description}
      description2={rosehack.description2}
      subtitle={rosehack.subtitle}
      bgColor={rosehack.bgColor}
      textColor={rosehack.textColor}
      carouselItems={rosehack.carouselItems}
      devposts={rosehack.devposts}
      stats={rosehack.stats}
      instagram={rosehack.instagram}
      email={rosehack.email}
    />
  );
};

export default RoseHack;
