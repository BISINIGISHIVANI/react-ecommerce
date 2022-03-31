import { addToWishlistService } from "../../../services";

export const addToWishlistHandler = async (product, wishlistDispatch, token) => {
    try {
        const response = await addToWishlistService(product, token);
        if (response.status === 201) {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}
