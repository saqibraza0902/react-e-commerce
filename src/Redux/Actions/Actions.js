
export const getProducts = (product) => {
    return {
        type: "GET_PRODUCTS",
        payload: product
    }
}
export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    };
}
export const removeToCart = (id) => {
    return {
        type: "REMOVE_TO_CART",
        payload: id
    };
}
export const removeOne = (item) => {
    return {
        type: "REMOVE_ONE",
        payload: item
    };
}
export const removeAll = (items) => {
    return {
        type: "REMOVE_ALL",
        payload: items
    }
}