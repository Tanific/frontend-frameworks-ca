import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/getProductByID';
import Layout from "../components/layout/layout";

import styles from './productPage.module.css'

const Productpage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            if (!id) return;
            const response = await getProductByID(id);
            const product = response.data
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
                    <div className={styles.imageContainer}>
                        <img src={data.image.url} alt={data.title} className={styles.image} />
                    </div>
                    <p>{data.description}</p>
                    <p className={styles.price}>Price: ${data.price}</p>
                    {data.discountedPrice && (
                        <p className={styles.discountedPrice}>Discounted Price: ${data.discountedPrice}</p>
                    )}
                </div>
            ) : (
                <p>Loading product...</p>
            )}
        </Layout>
    );
};

export default Productpage;
