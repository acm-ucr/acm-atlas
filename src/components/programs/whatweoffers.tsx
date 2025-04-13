import { whatWeOffer } from "@/data/whatweoffer";
import WhatWeOffer from "@/components/programs/whatweoffer";

const WhatWeOffers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-acm-gray-500 p-10 text-5xl font-bold">WHAT WE OFFER</p>
      {whatWeOffer.map(
        (
          { header, program, acm, pText, textColor, linkColor, image, link },
          index,
        ) => (
          <WhatWeOffer
            key={index}
            header={header}
            program={program}
            acm={acm}
            pText={pText}
            textColor={textColor}
            linkColor={linkColor}
            image={image}
            link={link}
          />
        ),
      )}
    </div>
  );
};

export default WhatWeOffers;
