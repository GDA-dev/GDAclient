import React from "react";
import WishlistCard from "../components/wishlistCard";
import { Clothing } from '../../utils/types';

interface WishlistModalProps {
    wishlistItems: Clothing[];
    requestWishlistItems: () => void;
};

const WishlistModal: React.FC<WishlistModalProps> = ({ wishlistItems, requestWishlistItems }) => {
        
    const deleteWishlistItem = (index: number) => {
        const wishlistString = localStorage.getItem("wishlist");
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
        if (wishlist.length !== 0) {
            const updatedWishlist = wishlist.splice(index, 1);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            requestWishlistItems();
        };
    };
    
    return (
        <div id="WishlistModal">
            <div id="WishlistModalHeaderContainer">
                <p id="WishlistModalHeader">Wishlist</p>
            </div>
            <div id="WishlistModalCardsContainer">
                {wishlistItems.length === 0 ? (
                    <div id="WishlistModalEmptyMessage">There are no items in your wishlist.</div>
                ) : (
                    <>
                        {wishlistItems.map((item: Clothing, index: number) => (
                            <div id="WishlistModalCard" key={index}>
                                <WishlistCard clothing={item} deleteClothing={() => deleteWishlistItem(index)} />
                            </div>
                        ))}
                    </>
                )}
            </div>
            <style>
                {`

                    #Wishlist {

                    }

                    #WishlistModalHeaderContainer {

                    }

                    #WishlistModalHeader {

                    }

                    #WishlistModalCardsContainer {

                    }

                    #WishlistModalEmptyMessage {
                        
                    }

                    #WishlistModalCard {

                    }

                `}
            </style>
        </div>
    );
};

export default WishlistModal;