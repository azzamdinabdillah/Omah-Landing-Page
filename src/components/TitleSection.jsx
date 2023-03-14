const TitleSection = (props) => {
  return (
    <div className="md:flex justify-between items-center mt-10 lg:mt-20">
      <h1 className="w-[100%] text-lg md:text-2xl lg:text-4xl md:w-[50%] md:leading-relaxed lg:leading-[1.5] lg:w-[55%]">{props.textTitle}</h1>
      <h1 className="font-medium text-lg md:text-xl hover:underline cursor-pointer mt-2 md:mt-0 opacity-80">
        View all
      </h1>
    </div>
  );
};

export default TitleSection;
