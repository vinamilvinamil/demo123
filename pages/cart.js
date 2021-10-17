import Head from 'next/head'
import {useContext} from 'react'
import {DataContext} from '../store/GlobalStore'
import CartItem from './cartItem';

const Cart = () => {
    const [state , dispatch] = useContext(DataContext);
    const {cart} = state;

    if(cart.length == 0) return <h2>Not Found</h2>
    return (
        <div className='row mx-auto'>
            <Head>
                <title>Cart page</title>
            </Head>
            <div className='col-md-8 text-secondary table-responsive my-3'>
                <h2 className='text-uppercase'>SHOPPING CART</h2>
                <table className='table my-3'>
                    <tbody>
                        {
                            cart.map(item => (
                                <CartItem key = {item._id} item = {item} dispatch = {dispatch} cart = {cart} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='col-md-4'>

            </div>
        </div>
    )
}

export default Cart;