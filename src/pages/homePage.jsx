import { useState, useEffect } from "react";
import { getProducts } from "../api/getProducts";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card/product-card";
import Layout from "../components/layout/layout";

import styles from './homePage.module.css';

const Homepage = () => {
    const [data, setData] = useState([]);

    const fetchProducts = async () => {
        const response = await getProducts();
        const products = response.data; 
        setData(products);
        
        console.log(products);
    };

    useEffect(() => {
        fetchProducts(); 
    }, []);

    return (
        <Layout>
            <div className={styles.products}>
              <ul>
                {data.length > 0 ? (
                    data.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                                <ProductCard 
                                    id={product.id}
                                    title={product.title}
                                    imageUrl={product.image.url}
                                    description={product.description}
                                    price={product.price}
                                    discountedPrice={product.discountedPrice}
                                />
                        </Link>
                    ))
                ) : (
                <p>Loading products...</p>
                )}
              </ul>
            </div>
        </Layout>
    );
}

export default Homepage;
