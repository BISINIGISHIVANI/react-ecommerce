import axios from "axios";

export const getWishlistItemsService = (token) => {
    return axios.get("/api/user/wishlist", { headers: { authorization: token } });
}
