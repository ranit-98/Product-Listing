import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Products = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadRange = 4; 
  const [loadMore, setLoadMore] = useState(loadRange);
  const getProducts = async () => {
    try {
      const productsResponse = await axios.get(
        `https://dummyjson.com/products`
      );
      setProducts(productsResponse.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
 
  const handleLoadMore = () => {
    setLoadMore((load) => load + loadRange);
  };
  return (
    <>
    {isLoading && <h1>Loading.....</h1>}
    {error && <h1>{error.message}</h1>}
      <section id="blog" class="blog">
   
        <div class="container" style={{marginTop:"1rem"}}>
         
          <div class="row">
            <div class="col-lg-4">
           <SideBar/>
            </div>

            <div class="col-lg-8 entries">
                <div className="container">
                    <div className="row">
                    {products?.products?.slice(0, loadMore).map((product) => {
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
                          <Link to={`product-details/${product?.id}`}>More Details</Link>
                        </div>
                      </div>
                    </article>
                    </div>
                  </>
                );
              })}
{
  !isLoading &&
              <button
                onClick={handleLoadMore}
                style={{
                  color: "white",
                  backgroundColor: "#1ED33C",
                  padding: "3px 8px",
                }}
              >
                Load More
              </button>}

                    </div>
                </div>
             
            </div>
            {/* <!-- End blog entries list --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
