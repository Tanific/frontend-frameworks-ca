import { useState, useEffect } from "react";
import { getProducts } from "../api/getProducts";
import ProductCard from "../components/product-card/product-card";
import Layout from "../components/layout/layout";

function Homepage() {
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
            <ul>
                {data.length > 0 ? (
                    data.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image.url}
                            description={product.description}
                            price={product.price}
                            discountedPrice={product.discountedPrice}
                        />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
                </ul>
            </Layout>
    );
}

export default Homepage;
