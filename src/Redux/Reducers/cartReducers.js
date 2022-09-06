const initialState = {
    cart: [],
    localCart: []
};
if (localStorage.getItem('carts')) {
    initialState.cart = JSON.parse(localStorage.getItem('carts'))
} else {
    initialState.cart = []
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const cartItem = state.cart.findIndex((item) => item.id === action.payload.id)
            console.log(cartItem)
            if (cartItem >= 0) {
                state.cart[cartItem].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    cart: [...state.cart, temp],
                    localCart: [localStorage.setItem('carts', JSON.stringify([...state.cart, temp]))]
                }
            }

        case 'REMOVE_TO_CART':
            const data = state.cart.filter((element) => element.id !== action.payload)
            console.log(data)
            console.log(action.payload)
            return {
                ...state,
                cart: data,
                localCart: localStorage.setItem('carts', JSON.stringify(data))
            }

        case 'REMOVE_ONE':
            const cartItem_dec = state.cart.findIndex((iteam) => iteam.id === action.payload.id)
            console.log(cartItem_dec)

            if (state.cart[cartItem_dec].quantity >= 1) {
                const dltiteams = state.cart[cartItem_dec].quantity -= 1

                console.log([...state.cart, dltiteams]);

                return {
                    ...state,
                    cart: [...state.cart],
                    localCart: localStorage.setItem('carts', JSON.stringify([...state.cart]))
                }
            } else if (state.cart[cartItem_dec].quantity === 0) {
                const data = state.cart.filter((ele) => ele.id !== action.payload);
                console.log(data)

                return {
                    ...state,
                    cart: data,
                    localCart: localStorage.setItem('carts', JSON.stringify(data))
                }
            }
            break; case 'REMOVE_ALL':
            return {
                cart: [],
                localCart: localStorage.setItem("carts", JSON.stringify([])),
            }
        default:
            return state;
    }

};
