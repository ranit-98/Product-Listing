import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategories] = useState();
    const getCategories=async()=>{
        const categoriesResponse = await axios.get(
            `https://dummyjson.com/products/categories`
          );
          setCategories(categoriesResponse?.data);
    }  
    
    useEffect(()=>{
        getCategories()
    },[])
  return (
   <>
     <div class="sidebar" data-aos="fade-left">
                <h3 class="sidebar-title">
                   <Link to="/">Categories</Link> 
                </h3>
                <div class="sidebar-item categories">
                  <ul>
                    {categories?.map((category) => {
                      return (
                        <>
                          <li>
                            <Link to={`/category/${category}`}>{category}</Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                
                </div>

              
              </div>
   </>
  )
}

export default SideBar
