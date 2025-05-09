import { whatWeOffer } from "@/data/whatweoffer";
import WhatWeOffer from "@/components/programs/whatweoffer";

const WhatWeOffers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-acm-gray-500 w-3/5 p-10 text-2xl font-bold">
        ACM offers four project oriented programs, each with their own focus—
        such as web development and robotics, and one mentorship program. Our
        programs typically run quarterly. We strive to cover a wide variety of
        topics for our members to explore their interests! Take a look below!
      </p>
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
