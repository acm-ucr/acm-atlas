const Starlightbuttons = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="grid grid-flow-row grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <a
            href="https://discord.gg/5xzE2qTEKZ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-navy flex justify-center rounded-lg px-18 py-4 text-xl text-white"
          >
            Join our Discord!
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://github.com/acm-ucr/starlight"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-acm-navy flex justify-center rounded-lg px-18 py-4 text-xl text-white"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Starlightbuttons;
