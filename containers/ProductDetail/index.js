import {useContext, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {DataContext} from '../../store/GlobalStore';
import {addToCart} from '../../store/Actions';
import Cookies from 'js-cookie';

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [state, dispatch] = useContext(DataContext);
    const {cart} = state;

    if(!product) {
        return <h2>Not found item</h2>
    }
    return (
        <div className='row detail_page'>
            <Head>
                <title>Detail DetailProduct</title>
            </Head>

            <div className='col-md-6'> 
                <Image alt='' width='100%' objectFit={'contain'} height={50} layout='responsive' src={product?.images?.length > 0 && product?.images[0].url ? product?.images[0].url : process.env.NEXT_PUBLIC_DEFAULT_IMAGE}></Image>
            </div>
            <div className='col-md-6 mt-3'>
                <h2 className='text-uppercase' >{product?.title}</h2>
                <h5 className='text-uppercase' >${product?.price}</h5>
                <h5 className='text-uppercase' >{'token:' + state.auth.token}</h5>
                <h5 className='text-uppercase' >{'côkie:' +Cookies.get('_atc')}</h5>
                <div className='row mx-0 d-flex justify-content-between'>
                    {
                        product?.inStock > 0 ?
                        <h6 className='text-danger'>In stock: {product?.inStock}</h6>
                        : <h6 className='text-danger'>Out stock</h6>
                    }
                    <h6 className='text-danger'>Sold: {product?.sold}</h6>
                </div>
                <div className='my-2'>{product?.description}</div>
                <div className='my-2'>{product?.content}</div>

                <button type='button' className='btn btn-dark d-block my-3 px-5'
                onClick={() => dispatch(addToCart(product, cart))}
                disabled= {product.inStock == 0 ? true : false}>
                    Buy
                </button>
            </div>
        </div>
    )
}

export default DetailProduct;