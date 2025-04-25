import Image from "next/image";
import arcades from "@/public/join/gallery/arcades.webp";
import claw from "@/public/join/gallery/claw.webp";
import group from "@/public/join/gallery/group.webp";

const Gallery = () => {
  return (
    <div>
      <p>Gallery</p>
      <div className="grid grid-cols-5 gap-8">
        <div className="grid gap-8">
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={arcades}
            alt="Round1 Bowling Social"
          />
          <Image
            className="h-full w-full rounded-3xl object-cover"
            src={claw}
            alt="Round1 Bowling Social"
          />
        </div>
        <Image
          className="h-full w-full rounded-3xl object-cover"
          src={group}
          alt="Group photo at Round1 Bowling social"
        />
        <div className="grid gap-8">
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
        </div>
        <div className="grid gap-8">
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
          <div className="bg-acm-blue-600 h-40 w-40 rounded-3xl object-cover"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
