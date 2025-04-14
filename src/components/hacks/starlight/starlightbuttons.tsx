const Starlightbuttons = () => {
  return (
    <div className = "flex justify-center p-10">
      <div className ="grid grid-flow-row grid-cols-2 gap-20">
        <div className = "flex justify-center flex-col">
          <a 
            href = "https://discord.gg/5xzE2qTEKZ"
            target = "_blank"
            rel = "noopener noreferrer"
            className = "bg-acm-navy text-white py-4 px-18 rounded-lg flex justify-center text-xl"
          >
            Join our Discord!
          </a>
        </div>
        <div className = "flex justify-center flex-col">
          <a
            href = "https://github.com/acm-ucr/starlight"
            target = "_blank"
            rel = "noopener noreferrer"
            className = "bg-acm-navy text-white py-4 px-18 rounded-lg flex justify-center text-xl"
          >
            Github
          </a>
        </div>
        
      </div>
    </div>
  )
};

export default Starlightbuttons;