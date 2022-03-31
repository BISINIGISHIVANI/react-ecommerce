import axios from "axios";

export const removeFromWishlistService = (_id, token) => {
    return axios.delete(`/api/user/wishlist/${_id}`, { headers: { authorization: token } })
}
