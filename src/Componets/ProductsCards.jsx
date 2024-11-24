import { useLoaderData, useParams } from "react-router-dom";
import Allproducts from "./Allproducts";
import { useEffect, useState } from "react";


const ProductsCards = () => {
    const data =useLoaderData();
    const {category}= useParams();
    const [products, setProducts]= useState([])
    useEffect(()=>{
        if(category){
            const filterByCategory = [...data].filter(product =>
                product.category === category);
                setProducts(filterByCategory)
        }
        else{
            setProducts(data)
        } 
    },[category, data])

    
    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {products.map(product=><Allproducts  key={product.id} product={product} /> )}
        </div>
    );
};

export default ProductsCards;