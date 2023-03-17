import HouseImg1 from '/image/house-1.png';
import HouseImg2 from '/image/house-2.png';
import HouseImg3 from '/image/house-3.png';

const HouseList = (props) => {
    return (
        <div className="pt-5 md:pt-0 mb-5">
            <div className="relative outline-none border-none" data-aos="fade-down">
                <img src={props.image} alt="" className="rounded outline-none border-none" />
                <div className="bg-white absolute bottom-0 left-0 p-3 outline-none border-none rounded-tr-md overflow-hidden">
                    <h1 className="text-bg-primary-color">{props.room} room</h1>
                </div>
                <img src="./image/love-icon-2.png" alt="" className="p-3 rounded-full absolute top-0 right-0 lg:right-8 bg-white m-4" />
            </div>
            <div className="mt-3" data-aos="fade-right" data-aos-delay="100"> 
                <h1 className="text-[23px] md:text-2xl">{props.homeName}</h1>
                <p className="text-text-primary-color my-3 text-xs md:text-sm">{props.streetName}</p>
                <p className="text-bg-primary-color text-lg md:text-xl">${props.price}</p>
            </div>
        </div>
    )
}

const HouseListSection = () => {
    return (
        <section className="mt-10 px-5 md:px-16 md:mt-24 lg:px-32 lg:mt-40">
            <div className="flex items-center justify-between">
                <div className="md:flex justify-start items-center gap-5 lg:gap-10">
                    <h1 className="text-2xl md:text-3xl font-medium lg:text-4xl">The latest</h1>
                    <div className="flex gap-3 md:gap-5 items-center mt-2 md:mt-0">
                        <h1 className="cursor-pointer text-bg-primary-color text-lg md:text-xl lg:text-2xl">For sale</h1>
                        <h1 className="cursor-pointer text-text-primary-color text-lg md:text-xl lg:text-2xl">To rent</h1>
                    </div>
                </div>
                <h1 className="font-medium text-lg md:text-xl hover:underline cursor-pointer">View all</h1>
            </div>
            <div className="md:mt-8 md:grid grid-cols-3 gap-10 lg:mt-10">

                <HouseList image={HouseImg1} room={"2"} homeName={"Orange House"} streetName={"Jl Klapanunggal, cileungsi, bogor"} price={"1,435,000"} />

                <HouseList image={HouseImg2} room={"5"} homeName={"White House"} streetName={"Jl Klapanunggal, cileungsi, bogor"} price={"1,200,500"} />

                <HouseList image={HouseImg3} room={"6"} homeName={"Green House"} streetName={"Jl Klapanunggal, cileungsi, bogor"} price={"2,300,500"} />
                
            </div>
        </section>
    )
}

export default HouseListSection;