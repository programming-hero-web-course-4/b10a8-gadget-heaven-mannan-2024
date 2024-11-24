
import banner from "../images/banner.jpg"
const Hero = () => {
    return (
        <div className="text-center  bg-purple-600 px-20 text-white rounded-3xl h-1/4 ">
            <h1 className="text-5xl font-bold ">Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories</h1>
            <p className="text-base font-normal py-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            <button className="bg-white font-bold text-purple-600 rounded-full mb-56 py-4 px-7">Shop Now</button>
            <div className="w-3/5 h-fit bg-purple-500 text-center mt-10 p-2 mb-0 mx-40 border-solid border-white border-2 rounded absolute -bottom-0 ">
            <img className="w-fit rounded-xl " src= {banner}/>
                    
            </div>
        </div>
    );
};

export default Hero;