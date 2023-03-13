const HouseListSection = () => {
    return (
        <section className="mt-10 px-8 md:mt-24 lg:px-32 lg:mt-40">
            <div className="flex items-center justify-between">
                <div className="md:flex justify-start items-center gap-5 lg:gap-10">
                    <h1 className="text-2xl md:text-3xl font-semibold lg:text-4xl">The latest</h1>
                    <div className="flex gap-3 md:gap-5 items-center mt-2 md:mt-0">
                        <h1 className="cursor-pointer text-bg-primary-color text-lg md:text-xl lg:text-2xl">For sale</h1>
                        <h1 className="cursor-pointer text-text-primary-color text-lg md:text-xl lg:text-2xl">To rent</h1>
                    </div>
                </div>
                <h1 className="font-medium text-lg md:text-xl hover:underline cursor-pointer">View all</h1>
            </div>
            <div className="md:mt-8 md:grid grid-cols-3 gap-10 lg:mt-10">
                <div className="pt-5 md:pt-0">
                    <div className="relative outline-none border-none">
                        <img src="./image/house-1.png" alt="" className="rounded outline-none border-none" />
                        <div className="bg-white absolute bottom-0 left-0 p-3 outline-none border-none rounded-tr-md overflow-hidden">
                            <h1 className="text-bg-primary-color">3 room</h1>
                        </div>
                        <img src="./image/love-icon-2.png" alt="" className="p-3 rounded-full absolute top-0 right-0 lg:right-8 bg-white m-4" />
                    </div>
                    <div className="mt-3"> 
                        <h1 className="text-[23px] md:text-2xl">Orange House</h1>
                        <p className="text-text-primary-color my-3 text-xs md:text-sm">Jl Klapanunggal, cileungsi, bogor</p>
                        <p className="text-bg-primary-color text-lg md:text-xl">$1,435,000</p>
                    </div>
                </div>
                <div className="pt-10 md:pt-0">
                    <div className="relative outline-none border-none">
                        <img src="./image/house-2.png" alt="" className="rounded outline-none border-none" />
                        <div className="bg-white absolute bottom-0 left-0 p-3 outline-none border-none rounded-tr-md overflow-hidden">
                            <h1 className="text-bg-primary-color">2 room</h1>
                        </div>
                        <img src="./image/love-icon-2.png" alt="" className="p-3 rounded-full absolute top-0 right-0 lg:right-8 bg-white m-4" />
                    </div>
                    <div className="mt-3"> 
                        <h1 className="text-[23px] md:text-2xl">White House</h1>
                        <p className="text-text-primary-color my-3 text-xs md:text-sm">Jl Klapanunggal, cileungsi, bogor</p>
                        <p className="text-bg-primary-color text-lg md:text-xl">$1,223,000</p>
                    </div>
                </div>
                <div className="pt-10 md:pt-0">
                    <div className="relative outline-none border-none">
                        <img src="./image/house-3.png" alt="" className="rounded outline-none border-none" />
                        <div className="bg-white absolute bottom-0 left-0 p-3 outline-none border-none rounded-tr-md overflow-hidden">
                            <h1 className="text-bg-primary-color">1 room</h1>
                        </div>
                        <img src="./image/love-icon-2.png" alt="" className="p-3 rounded-full absolute top-0 right-0 lg:right-8 bg-white m-4" />
                    </div>
                    <div className="mt-3"> 
                        <h1 className="text-[23px] md:text-2xl">Green House</h1>
                        <p className="text-text-primary-color my-3 text-xs md:text-sm">Jl Klapanunggal, cileungsi, bogor</p>
                        <p className="text-bg-primary-color text-lg md:text-xl">$1,562,000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HouseListSection;