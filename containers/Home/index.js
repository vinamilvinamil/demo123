import {useState} from 'react'
import Head from 'next/head'
import ProductItem from '../../components/products/ProductItem';

const Home = (props) => {
    const [products, setProducts] = useState(props.products);
    return (
        <div className='products'>
            <Head>
                <title>Home Page</title>
            </Head>
            {
                products.length === 0 ?
                <h2>No Products</h2>
                : 
                products.map(product => {
                    return <ProductItem key = {product._id} product = {product} />
                })
            }
        </div>
    )
};

export default Home