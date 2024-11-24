import Footer from "../Componets/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";




const MainLayout = () => {
    return (
        <div className="">
            <div className="h-16">
            <Navbar></Navbar>
            </div>
            
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet>

                </Outlet>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;