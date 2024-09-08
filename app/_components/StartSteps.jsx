const StartSteps = ({ number, text }) => {
    // Split the text into words
    const [firstWord, ...restWords] = text.split(' ');
    // Join the rest of the words back into a single string
    const restOfText = restWords.join(' ');
  
    return (
      <div className="flex flex-row w-full">
        <div className="flex items-center justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
          <p className="font-bold text-[20px] text-white">0{number}</p>
        </div>
        <p className="flex-1 ml-[30px] w-full font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
          <span className="font-bold text-white">{firstWord} </span>
          {restOfText}
        </p>
      </div>
    );
  };
  
  export default StartSteps;
  