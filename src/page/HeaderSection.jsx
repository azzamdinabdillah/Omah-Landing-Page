const HeaderSection = () => {
    return (
        <section className="md:pt-5">
            <div className="md:flex justify-around items-center mt-8 px-8 md:px-10 lg:px-20">
                <h1 className="font-medium md:text-[45px] lg:text-[64px] text-[40px] leading-relaxed md:w-[60%]">Ready to <br /> find your new home</h1>
                <div className="lg:w-[28%] md:w-[40%] md:flex items-start justify-start mt-4 md:mt-0">
                    <div className="w-20 h-1 bg-bg-primary-color mt-3 mr-4 rounded-full md:mt-8"></div>
                    <p className="text-text-primary-color text-[20px] font-[300] leading-relaxed mt-5">looking for a house with a low price and quality here, and sell your house quickly here</p>
                </div>
            </div>
            <div className="mt-10 md:mt-10 overflow-x-clip relative">
                <img src="./image/main-header-1.png" alt="" className="scale-125 md:scale-100 pr-16" />
                <div className="bg-white overflow-hidden md:bg-white md:w-[90%] lg:w-[80%] md:absolute -bottom-10 right-0 lg:right-0 md:rounded-sm md:shadow-lg lg:-bottom-14 mr-10 md:mr-0">
                    <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-between gap-5 lg:gap-2 text-sm lg:text-base py-5 px-5 lg:py-8 md:px-10 mt-5 md:mt-0">
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Select City</h1>
                                <img src="./image/arrow-down.png" alt="" />
                            </div>
                            <p className="text-text-primary-color mt-2">Jakarta</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Price</h1>
                                <img src="./image/arrow-down.png" alt="" />
                            </div>
                            <p className="text-text-primary-color mt-2">$1000 - $2000</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Rooms</h1>
                                <img src="./image/arrow-down.png" alt="" />
                            </div>
                            <p className="text-text-primary-color mt-2">3 rooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Fotage</h1>
                                <img src="./image/arrow-down.png" alt="" />
                            </div>
                            <p className="text-text-primary-color mt-2">2 fotage</p>
                        </div>
                        <button className="bg-bg-primary-color text-white py-3 md:py w-full rounded-sm col-span-2 md:col-span-1 mt-1">Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;