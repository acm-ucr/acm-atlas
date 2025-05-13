import { whatWeOffer } from "@/data/whatweoffer";
import WhatWeOffer from "@/components/programs/whatweoffer";

const WhatWeOffers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="p-10 px-[5%] text-center text-xl font-bold text-acm-gray-500 md:w-4/5 md:text-left md:text-2xl">
        ACM offers four project oriented programs, each with their own focus—
        such as web development and robotics, and one mentorship program. Our
        programs typically run quarterly. We strive to cover a wide variety of
        topics for our members to explore their interests! Take a look below!
      </p>
      <p className="pt-10 text-3xl font-extrabold text-acm-gray-500 md:p-10 md:text-5xl md:font-bold">
        WHAT WE OFFER
      </p>
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
