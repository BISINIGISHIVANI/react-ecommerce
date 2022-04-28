import {addToWishlistService,getWishlistService,removeFromWishlistService} from "../../../services/wishlist-services/wishlist-service";
import {addToCartHandler,updateCartHandler} from "../cart-utils/cart-util";
import { toast } from 'material-react-toastify';
export const addToWishlistHandler = async (product, wishlistDispatch, token) => {
    try {
        const response = await addToWishlistService(product, token);
        if (response.status === 201) {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist })
            toast.info(`${product.name} added wishlist`)
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error);
    }
}
export const getWishlistItemsHandler=async (token,wishlistDispatch)=>{
    try {
        const response = await getWishlistService(token);
        if (response.status === 200) {
            wishlistDispatch({ type: "GET_WISHLIST", payload: response.data.wishlist })
        }else{
            throw new Error();
        }
    } catch (error) {
        alert(error)
    }
}
export const moveToCartandler=async (_id, product, token, cartState, cartDispatch)=>{
    try {
        const { cart } = cartState;
        const item = cart.find(item => item._id === _id);
        if (item) {
            updateCartHandler(_id, "increment", token, cartDispatch);
            toast.warn(`product already in cart,cart items increased`)
        } else {
            addToCartHandler(product, cartDispatch, token);
        }
        
    } catch (error) {
        alert(error)
    }
}
export const removeFromWishlistHandler = async (_id, token, wishlistDispatch) => {
    try {
        const response = await removeFromWishlistService(_id, token);
        if (response.status === 200) {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: response.data.wishlist });
            toast.warn("product removed from wishlist")
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error);
    }
}

