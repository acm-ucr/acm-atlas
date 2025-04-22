import Image from "next/image";

const WhatWeDo = () => {
  const images = [
    "/path-to-image1.jpg",
    "/path-to-image2.jpg",
    "/path-to-image3.jpg",
    "/path-to-image4.jpg",
  ];

  const icons = [
    { icon: "💻" },
    { icon: "📝" },
    { icon: "⚙️" },
    { icon: "📈" },
    { icon: "👥" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* Main grid container */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left side: Text and Icons */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl font-bold">WHAT WE DO</h2>

          {/* Description Text */}
          <div>
            <p className="text-lg leading-relaxed">
              Every quarter, we focus on improving specific aspects of our
              members. In the Fall, we develop professional resumes, build
              all-star LinkedIns, and offer workshops on Applying Effectively at
              companies from the Big 4 to startups.
            </p>
          </div>

          {/* Icons Grid */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
              >
                <span className="mb-2 text-3xl">{item.icon}</span>
                <span className="text-center text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Image Grid */}
        <div className="grid h-fit grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative ${
                index % 3 === 0 ? "h-72" : "h-64"
              } overflow-hidden rounded-lg`}
            >
              <Image
                src={src}
                alt={`Activity image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
