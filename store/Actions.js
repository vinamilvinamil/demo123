const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    MENU: 'MENU'
}

export default ACTIONS;

export const addToCart = (product , cart) => {
    if(product.inStock === 0) {
        return ({
            type: 'NOTIFY',
            payload: {
                error: 'This product is out of stock.'
            }
        })
    }
    const check = cart.every(item => {
        return item._id !== product._id
    });
    if(!check) return ({
        type: 'NOTIFY',
        payload: {
            error: 'The product has been added to carted'
        }
    })
    return ({
        type: 'ADD_CART',
        payload: [...cart, {...product, quantity: 1}]
    })

}