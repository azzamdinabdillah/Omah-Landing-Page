import TitleSection from "../components/TitleSection";

const BlogSection = () => {
  return (
    <section className="px-5 md:px-16 lg:px-32 mt-14 lg:mt-32">
      <TitleSection textTitle={"Always check our latest blog"} />

      <div className="mt-10 md:grid grid-cols-6 gap-5">
        <div className="col-span-4 lg:col-span-3">
          <div className="relative outline-none border-none" data-aos="fade-right">
            <img
              src="./image/house-4.png"
              alt=""
              className="rounded outline-none border-none"
            />
            <div className="bg-white absolute bottom-0 left-0 p-3 outline-none border-none rounded-tr-md overflow-hidden">
              <div className="flex gap-3 items-center">
                <img
                  src="./image/avatar-1.png"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <h1 className="font-medium text-sm">Yusuf Firdaus</h1>
                  <p className="text-text-primary-color text-xs mt-1">Admin</p>
                </div>
              </div>
            </div>
          </div>
          <h1 data-aos="fade-right" data-aos-delay="100" className="text-[#1B2021] font-medium mt-3 w-[100%] text-lg md:text-xl lg:text-2xl lg:mt-5">
            Tips and tricks in choosing a house
          </h1>
          <p data-aos="fade-right" data-aos-delay="100" className="text-sm mt-2 text-text-primary-color w-[90%]">
            tips and tricks to buy a house easily here is to buy at a low price
          </p>
        </div>

        <div className="col-span-2 lg:col-span-3">
          <div className="flex flex-col-reverse lg:justify-end lg:flex-row items-start mt-8 md:mt-0 gap-5">
            <div className="lg:translate-y-5" data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-[#1B2021] font-medium w-[100%] text-lg md:text-xl lg:text-2xl lg:leading-[1.5]">
                Create a clean and elegant home
              </h1>
              <p className="text-xs md:text-sm mt-1 md:mt-2 text-text-primary-color w-[90%]">
                Albert Firdaus
              </p>
            </div>
            <img src="./image/interior-1.png" alt="" className="w-full lg:w-[286px] lg:h-[184px]" data-aos="fade-right" />
          </div>
          <div className="flex flex-col-reverse lg:justify-end lg:flex-row items-start mt-8 md:mt-5 lg:mt-5 gap-5 " >
            <div className="lg:translate-y-5" data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-[#1B2021] font-medium w-[100%] text-lg md:text-xl lg:text-2xl lg:leading-[1.5]">
              Good paint color for home
              </h1>
              <p className="text-xs md:text-sm mt-1 md:mt-2 text-text-primary-color w-[90%]">
                Albert Firdaus
              </p>
            </div>
            <img src="./image/interior-2.png" alt="" className="w-full lg:w-[286px] lg:h-[184px]" data-aos="fade-right" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
