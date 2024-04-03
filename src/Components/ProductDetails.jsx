import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const ProductDetails = () => {
  const { category,id } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  const getProduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    setProductDetails(response?.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(productDetails);

  
 
  return (
    <>
      <section id="blog" class="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <SideBar />
            </div>

            <div class="col-lg-8 entries">
        
              <article class="entry entry-single" data-aos="fade-up">
              
                <div class="entry-img">
                  <img
                    src={productDetails.thumbnail}
                    alt=""
                    class="img-fluid"
                    style={{ width: "100%" }}
                  />
                </div>

                <h2 class="entry-title">{productDetails.title}</h2>
                <h1 class="entry-title">${productDetails.price}</h1>
                <h2 class="entry-title">
                  DiscountPercentage : {productDetails.discountPercentage}%
                </h2>
                <h2 class="entry-title">Brand: {productDetails.brand}</h2>
                <div class="entry-content">
                  <p>{productDetails.description}</p>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 class="entry-content">
                          rating: {productDetails.rating}
                        </h6>
                      </div>
                      <div className="col-md-6">
                        <h6 class="entry-content">
                          stock: {productDetails.stock}
                        </h6>
                      </div>
                    </div>
                  </div>
                  {productDetails?.images?.map((image) => {
                    return (
                      <>
                        <img
                          src={image}
                          class="img-fluid"
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </>
                    );
                  })}

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                    porro amet nostrum. In assumenda quia quae a id praesentium.
                    Quos deleniti libero sed occaecati aut porro autem.
                    Consectetur sed excepturi sint non placeat quia repellat
                    incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores
                    eaque aut. Explicabo omnis quibusdam esse. Ex libero illum
                    iusto totam et ut aut blanditiis. Veritatis numquam ut illum
                    ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                    enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                    nisi asperiores est veniam.
                  </p>
                </div>

                <div class="entry-footer clearfix">
                  <div class="float-left">
                    <i class="icofont-folder"></i>
                    <ul class="cats">
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul>

                    <i class="icofont-tags"></i>
                    <ul class="tags">
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                    </ul>
                  </div>

                  <div class="float-right share">
                    <a href="" title="Share on Twitter">
                      <i class="icofont-twitter"></i>
                    </a>
                    <a href="" title="Share on Facebook">
                      <i class="icofont-facebook"></i>
                    </a>
                    <a href="" title="Share on Instagram">
                      <i class="icofont-instagram"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- End blog entries list --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
