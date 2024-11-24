

const DashboardBanner = () => {
    return (
        <div className="text-center  bg-purple-600 px-20 text-white rounded-3xl h-1/6 pt-5 ">
            <h1 className="text-5xl font-bold ">Dashboard</h1>
            <p className="text-base font-normal py-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="">
            <button className="bg-purple-600 font-bold text-white border-white border-2   rounded-full mb-56 py-3 px-16 mx-2">Cart</button>
            <button className="bg-purple-600 font-bold text-white  border-white border-2 rounded-full mb-56 py-3 px-16 mx-2">Wishlist</button>
            </div>
            
        </div>
    );
};

export default DashboardBanner;