import { whatWeOffer } from "@/data/whatweoffer";
import WhatWeOffer from "@/components/programs/whatweoffer";

const WhatWeOffers = () => {
  return (
    <div className="">
      {whatWeOffer.map(({ header, program, acm, pText, image }, index) => (
        <WhatWeOffer
          key={index}
          header={header}
          program={program}
          acm={acm}
          pText={pText}
          image={image}
        />
      ))}
    </div>
  );
};

export default WhatWeOffers;
