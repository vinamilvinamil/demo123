import Link from 'next/link'
import Image from 'next/image'
import {useContext} from 'react'
import {DataContext} from '../../store/GlobalStore'
import {addToCart} from '../../store/Actions'
import anh from '../../assets/image_01.png'
import  styles from '../../styles/Home.module.scss'
const ProductItem = ({product}) => {
    const [state, dispatch] = useContext(DataContext);
    const {cart} = state;
    //const cart = {};

    const userLink = () => {
        return <>
            <Link href={`/product/${product._id}`}>
                <a className = 'btn btn-info mr-1 flex-fill'
                style={{marginRight: '5px', flex: 1}}>View</a>
            </Link>
            <button className = 'btn btn-success mr-1 flex-fill'
            style={{marginRight: '5px', flex: 1}}
            disabled={product.inStock == 0 ? true : false}
            onClick={() => dispatch(addToCart(product, cart))}>
                Buy
            </button>
        </>
    }
    
    return (
        <div className={`card`} style={{width: '18rem'}}>
            <Image alt='' className="card-img-top" width='100%' height= {250} src={product.images[0]?.url || process.env.NEXT_PUBLIC_DEFAULT_IMAGE}/>
            <div className="card-body">
                <h5 className="card-title" title={product.title}>
                    {product.title}
                </h5>
                <div className='row justify-content-between mx-0'>
                    <h6 className='text-danger'>${product.price}</h6>
                    {
                        product.inStock > 0 ?
                        <h6 className='text-danger'>In Stock: {product.inStock}</h6>
                        : <h6 className='text-danger'>Out Stock</h6>
                    }
                </div>
                <p className="card-text">
                    {product.description}    
                </p>
                <div className='row justify-content-between mx-0'>
                    {userLink()}
                </div>
                
            </div>
        </div>
    )
};

export default ProductItem;