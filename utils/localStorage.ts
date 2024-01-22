import { Clothing } from "./types";

export const getWishlistItems = () => {

    const wishlistString = localStorage.getItem('wishlist');
    const wishlist = wishlistString ? JSON.parse(wishlistString) : []; 
    return wishlist;
    
};

export const checkInWishlist = (id: number | undefined) => {

    if (typeof window !== 'undefined') {
        const wishlistString = localStorage.getItem('wishlist');
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];

        if (wishlist.length === 0) {
            return false;
        } else {
            const found = wishlist.find((item: Clothing) => item.id === id);
            console.log(found);
            if (found) {
                return true;
            } else {
                return false;
            };
        };
    };
};

export const addToWishlist = (clothing: Clothing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
    const clothingString = JSON.stringify(clothing);

    if (wishlist.length === 0) {

        localStorage.setItem("wishlist", `[${clothingString}]`);
        return true;

    } else {
        const found = checkInWishlist(clothing.id);
        if (found) {
            return true;
        } else {
            const updatedWishlist = wishlist.push(clothing);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return true;
        };
    };
};

export const deleteFromWishlist = (clothing: Clothing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist = wishlistString ? JSON.parse(wishlistString) : [];

    if (wishlist.length !== 0) {

        const found = checkInWishlist(clothing.id);
        if (found && wishlist.length < 1) {
            const updatedWishlist = wishlist.splice(found, 1);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return false;
        } else if (found && wishlist.length === 1) {
            localStorage.removeItem("wishlist");
            return false;
        };
    };

    return true;

};