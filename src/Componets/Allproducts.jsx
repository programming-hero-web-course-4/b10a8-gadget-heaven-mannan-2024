/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Allproducts = ({product}) => {
    const {id,image,model,price,category,details,specification,rating}= product || {};
    return (
        <div>
            <img className="w-30 h-30" src={image} alt="" />
            <h1 className="text-base font-semibold">{model}</h1>
            <p>Price:${price}</p>
        </div>
    );
};

export default Allproducts;