import Image from "next/image";
import { arcades } from "@/public/join/gallery/arcades.webp";
import { claw } from "@/public/join/gallery/claw.webp";
import { group } from "@/public/join/gallery/group.webp";

const Gallery = () => {
  return (
    <div>
      <p>Gallery</p>
      <div className="grid grid-cols-5">
        <Image src={arcades} alt="Round1 Bowling Social" />
        <Image src={claw} alt="Round1 Bowling Social" />
        <Image src={group} alt="Group photo at Round1 Bowling social" />
      </div>
    </div>
  );
};

export default Gallery;
