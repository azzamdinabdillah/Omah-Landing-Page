const EmailSection = () => {
  return (
    <section className="mt-10 md:mt-20 bg-bg-primary-color py-20 px-5 md:px-20 md:ml-20 lg:mt-28 md:rounded-l-md">
      <h1 className="text-white font-medium text-2xl lg:text-4xl lg:w-[40%] lg:mx-auto leading-relaxed text-center">Subscribe to get a discount of 30%</h1>
      <div className="relative bg-white mt-10 lg:w-[50%] lg:mx-auto rounded overflow-hidden">
        <input type="text" className="py-5 px-4 border-none outline-none" placeholder="Enter your email address" />
        <button className="bg-bg-primary-color text-white py-3 md:py rounded-sm col-span-2 md:col-span-1 absolute top-1/2 -translate-y-1/2 right-3 px-4">Search</button>
      </div>
    </section>
  );
};

export default EmailSection;
