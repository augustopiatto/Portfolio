interface Warning {
  text: string;
}

function Warning({ text }: Warning) {
  return (
    <div>
      <div className="bg-warning rounded-xl h-8 w-36 flex items-center justify-center">
        <p className="font-bebas text-background text-lg tracking-wide">
          {text}
        </p>
      </div>
      <div className="ml-5 h-0 w-0 border-x-[10px] border-x-transparent border-t-[16px] border-t-warning"></div>
    </div>
  );
}

export default Warning;
