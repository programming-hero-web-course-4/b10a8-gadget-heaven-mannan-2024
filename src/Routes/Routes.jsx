import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ProductsCards from "../Componets/ProductsCards";

const routes = createBrowserRouter([
{
    path:'/',
    element: <MainLayout/>,
    children:[
    {
      path:'/',
      element:<Home/>,
      loader:()=>fetch('../Category.json'),
      children:[
        {path:'/',
        element:<ProductsCards/>,
        loader:()=>fetch('../Products.json'),
    },
    {path:'/category/:category',
      element:<ProductsCards/>,
      loader:()=>fetch('../Products.json'),
  }
      ]
     },
     {
      path:'/statistics',
      element:<Statistics/>
     },
     {
      path:'/dashboard',
      element:<Dashboard/>
     },

 ],
},

])

export default routes