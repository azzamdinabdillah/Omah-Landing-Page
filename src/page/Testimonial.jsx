import TitleSection from "../components/TitleSection";
import TestimoniImg1 from "/image/testimoni-1.png";
import TestimoniImg2 from "/image/testimoni-2.png";

const SingleTestimonial = (props) => {
  return (
    <div className="flex-none w-[85%] md:w-[45%] lg:w-[35%]">
      <div className="relative outline-none border-none">
        <img
          src={props.image}
          alt=""
          className="rounded outline-none border-none"
        />
        <div className="bg-white absolute bottom-0 left-0 p-3 outline-none border-none rounded-tr-md overflow-hidden">
          <h1 className="text-bg-primary-color">{props.name}</h1>
        </div>
      </div>
      <h1 className="text-[#1B2021] font-medium mt-5 w-[95%] text-base md:text-xl">
        {props.description}
      </h1>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="px-5 md:px-16 lg:px-32">
      <TitleSection
        textTitle={"Some people are very satisfied buying a house here"}
      />

      <div className="mt-7 md:mt-10 flex overflow-x-scroll gap-5 touch-auto testimoni pb-5 md:pb-14 lg:pb-16">
        <SingleTestimonial
          image={TestimoniImg1}
          name={"Putri Doe"}
          description={
            "I am very satisfied buying a house here because it is fast and easy"
          }
        />
        <SingleTestimonial
          image={TestimoniImg2}
          name={"Jane Doe"}
          description={
            "Buying a house here is very cheap and high quality"
          }
        />
        <SingleTestimonial
          image={TestimoniImg1}
          name={"Jone Doe"}
          description={
            "I am very satisfied buying a house here because it is fast and easy"
          }
        />
      </div>
    </section>
  );
};

export default Testimonial;
