import { addToCartService,updateCartService,removeFromCartService } from "../../../services/cart-services/cart.service";
import {addToWishlistHandler} from "../wishlist-util/wishlist-utl";
import { toast } from 'material-react-toastify';
export const addToCartHandler = async (product, cartDispatch, token) => {
    try {
        const response = await addToCartService(product, token);
        if (response.status === 201) {
            cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart })
            toast.info(`${product.name} added to cart`)
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
       toast.error(error);
    }
}

export const getCartBill = (cart) => {
    const cartQuantity = cart.reduce((acc, curr) => acc + Number(curr.qty), 0);
    const itemsPrice = cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0);
    const totalPrice = itemsPrice - 100;
    return { cartQuantity, itemsPrice, totalPrice };
}
export const updateCartHandler = async (_id, actionType, token, cartDispatch) => {
    try {
        const response = await updateCartService(_id, actionType, token);
        if (response.status === 200) {
            cartDispatch({ type: "UPDATE_CART_ITEM", payload: response.data.cart });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}
export const removeFromCartHandler = async (_id, token, cartDispatch) => {
    try {
        const response = await removeFromCartService(_id, token);
        if (response.status === 200) {
            cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error);
    }
}
export const moveToWishlistHandler=async(_id, product, wishlistDispatch,token, cartDispatch,wishlist)=>{
    try {
        const wishlistItem=wishlist.find((item)=>item._id===_id)
        if(!wishlistItem){
            addToWishlistHandler(product,wishlistDispatch,token);
            toast.info(`${product.name} added wishlist`)
        }
        removeFromCartHandler(_id,token,cartDispatch);
        toast.info(`${product.name} already exist wishlist`)
    } catch (error) {
        toast.error(error)
    }
}
