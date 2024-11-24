/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
const Categories = ({categories}) => {
    return (
        
            <div  className="flex flex-col items-start gap-8 mt-4">
  {categories.map(category=>
  (<NavLink 
    key={category.category}
   to = {`/category/${category.category}` }
   role="tab" 
   className={({isActive})=>`tab text-base font-semibold ${isActive?'tab-active bg-yellow-400 rounded-xl':''}`}>
  {category.category}
  </NavLink>))}
  
</div>
            
        
    );
};

export default Categories;