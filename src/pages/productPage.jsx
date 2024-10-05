import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../api/getProductByID";
import Layout from "../components/layout/layout";
import LoadingSpinner from '../components/spinner/spinner';

import styles from "./productPage.module.css";

const Productpage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            if (!id) return;
            const response = await getProductByID(id);
            const product = response.data;
            setData(product);
            console.log(product);
        };

    getData();
  }, [id]);

    return (
        <Layout>
            {data ? (
                <div className={styles.container}>
                    <h1>{data.title}</h1>
                    <div className={styles.contentContainer}>
                        <div className={styles.imageContainer}>
                            <img src={data.image.url} alt={data.title} className={styles.image} />
                        </div>
                            <p>{data.description}</p>
                    </div>
                    <p className={styles.price}>Price: kr{data.price}</p>
                    {data.discountedPrice && (
                        <p className={styles.discountedPrice}>Discounted Price: kr{data.discountedPrice}</p>
                    )}
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </Layout>
    );
};

export default Productpage;
