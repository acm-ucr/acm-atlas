import features from "@/data/hacks/features";

const FeaturedProjects = () => {
  return (
    <div className="mx-auto my-16 grid w-1/2 grid-cols-3 place-items-center gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="h-full rounded-2xl bg-white px-8 py-4 text-acm-gray-500 shadow-lg"
        >
          <p className="py-2 text-xl font-bold">{feature.name}</p>
          <p className="text-lg">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
