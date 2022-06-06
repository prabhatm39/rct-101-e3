import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Product from "./Product/Product";

const Products = () => {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProducts(...products, d);
    }
    fetchProducts();
  },[])
  return <div>{/* Code here */}
  <h1>
  Products
  </h1>
  <div>
    {
      products.map((pro) => {
        return(
          <div>
            <Link to={`/products/${pro.id}`}>
              <Product />
            </Link>
          </div>
        )
      })
    }
  </div>
 
  </div>;
};

export default Products;
