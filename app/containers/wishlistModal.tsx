import React from "react";
import WishlistCard from "../components/wishlistCard";
import { Clothing } from '../../utils/types';
import { IoClose } from "react-icons/io5";

interface WishlistModalProps {
    wishlistItems: Clothing[];
    requestWishlistItems: () => void;
    closeWishlistModal: () => void;
};

const WishlistModal: React.FC<WishlistModalProps> = ({ wishlistItems, requestWishlistItems, closeWishlistModal }) => {
        
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
            <div id="WishlistModalCloseContainer" onClick={closeWishlistModal}>
                <IoClose id="WishlistModalClose" />
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
                    
                    #WishlistModal {
                        display: flex;
                        position: fixed;
                        top: 10vh;
                        right: 5px;
                        width: 30vw;
                        height: 50vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid black;
                    }

                    #WishlistModalHeaderContainer {
                        display: flex;
                        position: absolute;
                        top: 20px;
                        left: 15px;
                    }

                    #WishlistModalHeader {
                        font-size: 20px;
                        font-weight: 600;
                    }

                    #WishlistModalCloseContainer {
                        display: flex;
                        position: absolute;
                        top: 10px;
                        right: 5px;
                        width: 10%;
                        height: 10%;
                    }

                    #WishlistModalCloseContainer:hover {
                        opacity: 0.5;
                        cursor: pointer;
                    }

                    #WishlistModalClose {
                        width: 80%;
                        height: 80%;
                    }

                    #WishlistModalCardsContainer {

                    }

                    #WishlistModalEmptyMessage {
                        
                    }

                    #WishlistModalCard {

                    }

                    @media (max-width: 900px) {
                        #WishlistModal {  
                            display: flex;
                            position: fixed;
                            top: 37.5vh;
                            left: 2.5vw;
                            width: 95vw;
                            height: 60vh;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid black;
                        }
                    }

                `}
            </style>
        </div>
    );
};

export default WishlistModal;