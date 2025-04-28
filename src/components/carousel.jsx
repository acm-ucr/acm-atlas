const Carousel = ({ data, icons }) => {
  const renderItems = () =>
    data.map(({ name, icon, borderColor, iconColor }, index) => {
      const IconComponent = icons[icon];

      return (
        <div
          key={index}
          className={`${borderColor} flex h-full items-center gap-x-10 rounded-lg border-2 px-5 py-3`}
        >
          {IconComponent && <IconComponent size={35} className={iconColor} />}
          <p className="text-right text-3xl font-light">{name}</p>
        </div>
      );
    });

  return (
    <div className="relative flex w-screen overflow-hidden">
      <div className="animate-marquee flex items-stretch gap-10 px-10">
        {renderItems()}
      </div>

      {/* Second Marquee */}
      <div className="animate-marquee-continuation absolute flex items-stretch gap-10 px-10">
        {renderItems()}
      </div>
    </div>
  );
};

export default Carousel;
