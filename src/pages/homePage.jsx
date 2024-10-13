import { useState, useEffect } from "react";
import { getProducts } from "../api/getProducts";

import LookaheadSearch from "../components/lookahead-search/lookahead-search";
import Layout from "../components/layout/layout";
import ProductCard from "../components/product-card/product-card";
import LoadingSpinner from "../components/spinner/spinner";
import styles from "./homePage.module.css";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      const products = response.data;
      setData(products);
      setFilteredProducts(products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, data]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <Layout>
      <div className={styles.products}>
        <hgroup>
          <h1>Welcome to eCom store</h1>
          <p className={styles.intro}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            natus, dolor error minus ipsa velit
          </p>
        </hgroup>
        <div className={styles.productContainer}>
          <LookaheadSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredProducts={filteredProducts}
          />
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <p className={styles.noProductsFound}>No products found</p>
              ) : (
                <>
                  <ul>
                    {filteredProducts.slice(0, visibleCount).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image?.url}
                        description={product.description}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                      />
                    ))}
                  </ul>
                  {visibleCount < filteredProducts.length && (
                    <button
                      className={styles.showMoreButton}
                      onClick={handleShowMore}
                    >
                      Show More
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;