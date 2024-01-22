import { Clothing } from "./types";

export const getWishlistItems = () => {

    const wishlistString = localStorage.getItem('wishlist');
    const wishlist: Clothing[] = wishlistString ? JSON.parse(wishlistString) : []; 
    return wishlist;
    
};

export const checkInWishlist = (id: number | undefined) => {

    if (typeof window !== 'undefined') {
        const wishlistString = localStorage.getItem('wishlist');
        const wishlist: Clothing[] = wishlistString ? JSON.parse(wishlistString) : [];

        if (wishlist.length === 0) {
            return false;
        } else {

            for (let i = 0; i < wishlist.length; i++) {
                if (wishlist[i].id === id) {
                    return true;
                };
            };

            return false;

        };
    };
};

export const addToWishlist = (clothing: Clothing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist: Clothing[] = wishlistString ? JSON.parse(wishlistString) : [];
    const clothingString = JSON.stringify(clothing);

    if (wishlist.length === 0) {

        localStorage.setItem("wishlist", `[${clothingString}]`);
        return true;

    } else {
        const found = checkInWishlist(clothing.id);
        if (found) {
            return true;
        } else {
            const updatedWishlist = [...wishlist, clothing];
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return true;
        };
    };
};

export const deleteFromWishlist = (clothing: Clothing) => {

    const wishlistString = localStorage.getItem("wishlist");
    const wishlist: Clothing[] = wishlistString ? JSON.parse(wishlistString) : [];

    if (wishlist.length !== 0) {

        let found;

        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i].id === clothing.id) {
                found = i;
                break;
            } else {
                found = undefined;
            };
        };

        if (found !== undefined && wishlist.length > 1) {
            wishlist.splice(found, 1);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            return false;
        } else if (found !== undefined && wishlist.length === 1) {
            localStorage.removeItem("wishlist");
            return false;
        } else {
            return false;
        };
    };

    return true;

};