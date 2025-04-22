interface ProgramProps {
  textColor: string;
  backgroundColor: string;
}

const JoinNowB = ({ textColor, backgroundColor }: ProgramProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex h-[144] flex-col self-center">
        <p className="text-acm-gray-500 flex h-[74] w-3xl justify-center p-6 text-5xl font-bold">
          Join Now
        </p>
        <div className="flex justify-center">
          <button
            className={`w-[350] rounded-lg px-10 py-4 text-4xl font-medium ${textColor} ${backgroundColor}`}
          >
            Apply Here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNowB;
