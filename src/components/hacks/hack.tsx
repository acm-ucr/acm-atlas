interface HackProps {
  name: string;
  website: string;
}

const Hack = ({ name, website }: HackProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{website}</p>
    </div>
  );
};

export default Hack;
