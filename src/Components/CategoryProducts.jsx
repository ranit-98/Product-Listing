import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
const CategoryProducts = () => {
    const {category}=useParams()
    const [CategoryProducts,setCategoryProducts]=useState()
    const getProducts=async()=>{
        const response= await axios.get(`https://dummyjson.com/products/category/${category}`)
        setCategoryProducts(response?.data?.products)
       
    }
    useEffect(()=>{
        getProducts()
    },[CategoryProducts])
    console.log(CategoryProducts);
  return (
   <>
      <section id="blog" class="blog">
      
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <SideBar/>
            </div>

            <div class="col-lg-8 entries">
                <div className="container">
                    <div className="row">
                    {CategoryProducts?.map((product) => {
                return (
                  <>
                  <div className="col-md-6">
                    <article class="entry" data-aos="fade-up" >
                      <div class="entry-img">
                        <img
                          src={product.thumbnail}
                          alt=""
                          class="img-fluid"
                          style={{ width: "100%",height:"15rem" }}
                        />
                      </div>

                      <h2 class="entry-title">{product.title}</h2>
                      <h3 class="entry-title">${product.price}</h3>

                      <div class="entry-content">
                        <p>{product.description.slice(0,50)}</p>
                        <div class="read-more">
                          <Link to={`/product-details/${product?.id}`}>More Details</Link>
                        </div>
                      </div>
                    </article>
                    </div>
                  </>
                );
              })}

             
                    </div>
                </div>
             
            </div>
            {/* <!-- End blog entries list --> */}
          </div>
        </div>
      </section>
   
   </>
  )
}

export default CategoryProducts
