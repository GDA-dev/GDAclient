import React from "react";
import WishlistCard from "../components/wishlistCard";
import { deleteFromWishlist } from "../../utils/localStorage";
import { IoClose } from "react-icons/io5";
import { Clothing } from '../../utils/types';

interface WishlistModalProps {
    wishlistItems: Clothing[];
    requestWishlistItems: () => void;
    closeWishlistModal: () => void;
};

const WishlistModal: React.FC<WishlistModalProps> = ({ wishlistItems, requestWishlistItems, closeWishlistModal }) => {
    
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
                                <WishlistCard clothing={item} deleteClothing={() => { deleteFromWishlist(wishlistItems[index]); requestWishlistItems(); }} />
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
                        width: 35vw;
                        height: 50vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: white;
                        border: 1px solid black;
                    }

                    #WishlistModalHeaderContainer {
                        display: flex;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 15%;
                        justify-content: flex-start;
                        align-items: center;
                        padding-left: 2.5%;
                    }

                    #WishlistModalHeader {
                        font-size: 20px;
                        font-weight: 600;
                    }

                    #WishlistModalCloseContainer {
                        display: flex;
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 100%;
                        height: 15%;
                        justify-content: flex-end;
                        align-items: center;
                        padding-right: 2.5%;
                    }

                    #WishlistModalCloseContainer:hover {
                        opacity: 0.5;
                        cursor: pointer;
                    }

                    #WishlistModalClose {
                        font-size: 30px;
                    }

                    #WishlistModalCardsContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 85%;
                        flex-direction: column;
                        margin-top: 10%;
                        justify-content: flex-start;
                        align-items: center;
                        overflow-y: scroll;
                    }

                    #WishlistModalCardsContainer::-webkit-scrollbar {
                        width: 0.5em;
                        background-color: white;
                    }
                    
                    #WishlistModalCardsContainer::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 25px;
                    }

                    #WishlistModalEmptyMessage {
                        display: flex;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 90%;
                        padding-left: 2.5%;
                        justify-content: center;
                        align-items: center;
                    }

                    #WishlistModalCard {
                        display: flex;
                        position: relative;
                        width: 95%;
                        height: 200px;
                        margin-top: 2%;
                        border: 1px solid black;
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