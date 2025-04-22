import Image from "next/image";
import { StaticImageData } from "next/image";

interface WhyWeDoItProps {
  header: string;
  pText: string;
  images: Images;
}

interface Images {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
}

const WhyWeDoIt = ({ header, pText, images }: WhyWeDoItProps) => {
  return (
    <div>
      <div>
        <h1 className="text-acm-gray-500 py-5 text-3xl font-bold">{header}</h1>
        <p className="text-acm-gray-500">{pText}</p>
      </div>
      <div>
        <Image src={images.image1} alt="image1" />
      </div>
    </div>
  );
};

export default WhyWeDoIt;
