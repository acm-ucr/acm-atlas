interface CarouselItemProps {
  name: string;
  icon: React.ElementType;
  borderColor: string;
  iconColor: string;
}

const CarouselItem = ({
  name,
  icon: IconComponent,
  borderColor,
  iconColor,
}: CarouselItemProps) => {
  return (
    <div
      className={`${borderColor} flex h-full items-center gap-x-10 rounded-lg border-2 px-5 py-3`}
    >
      {IconComponent && <IconComponent className={`text-4xl ${iconColor}`} />}
      <p className="text-right text-3xl font-light">{name}</p>
    </div>
  );
};

export default CarouselItem;
