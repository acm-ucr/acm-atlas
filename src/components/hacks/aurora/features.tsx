import features from "@/data/aurorafeatures";

const FeaturedProjects = () => {
  return (
    <div className="mx-auto my-16 grid w-4/5 grid-cols-3 place-items-center gap-8">
      {features.map(({ name, description }, index) => (
        <div
          key={index}
          className="h-full w-fit rounded-2xl bg-white px-8 py-8 text-acm-gray-500 shadow-lg"
        >
          <p className="py-2 text-2xl font-bold">{name}</p>
          <p className="text-lg">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
