import Image from "next/image";
import NotFoundKeys from "@/public/404/404_Keys.webp";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-30">
      <Image
        src={NotFoundKeys}
        alt="404 Keys"
        width={508.37}
        height={212.27}
        className="py-10"
      />
      <p className="text-acm-navy text-6xl font-bold">PAGE NOT FOUND</p>
    </div>
  );
};

export default Header;
