import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Componets/Categories";
import Hero from "../Componets/Hero"


const Home = () => {
    const categories =useLoaderData();
    return (
    <div className="">
            <Hero></Hero>
        <div className="mt-96">
            <h1 className="text-center text-2xl font-bold mt-20">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-2 ">
                    <div>
                    <button className="text-white ml-4 mb-4 text-base font-semibold bg-purple-600 rounded-full py-2 px-4">All Products</button>
                    <Categories categories={categories}/>
                    </div>
                    <div>
                    <Outlet/>
                    </div>
            </div>
            
            
            
                
        </div>
    </div>
    );
};

export default Home;