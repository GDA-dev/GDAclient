import React, { useState, useEffect } from "react";
import MobileMenu from "./mobileMenu";
import WishlistModal from "../containers/wishlistModal";
import { redirect } from "../../utils/redirectWithoutReload";
import { getWishlistItems } from "../../utils/localStorage";
import { FaHeart } from 'react-icons/fa';

export default function Header() {
    
    const [clothingOptions, setClothingOptions] = useState(false);
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [scrolled, setScrolled] = useState(false);
    const [showMobileView, setShowMobileView] = useState(false);

    const handleClothingOptions = () => {
        setClothingOptions(!clothingOptions);
    };

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
            closeMobileHeader();
        };
    };

    const handleMediaQuery = () => {
        if (window.innerWidth < 900) {
            setShowMobileView(true);
        } else {
            setShowMobileView(false);
        };
    };

    const closeMobileHeader = () => {
        if (window.scrollY <= 10) {
            setScrolled(false);
        }
    };

    useEffect(() => {

        if (window.innerWidth < 900) {
            setShowMobileView(true);
        } else {
            setShowMobileView(false);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleMediaQuery);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleMediaQuery);
        };

    }, []);
    
    return (
        <div id="Header">
            <div id="HeaderContainer" className={scrolled ? 'scrolled' : ''}>
                <div id="HeaderLogoContainer">
                    <a href="/"><img id="HeaderLogo" src="" alt="Genet Design's and Alterations Logo" /></a>
                </div>
                {showMobileView ? (
                    <div id="MobileHeaderMenuContainer">
                        <MobileMenu />
                    </div>
                ) : (
                    <>
                        <ul id="HeaderListContainer">
                            <li className="HeaderListItem" onClick={() => redirect("Hero")}>Home</li>
                            <li className="HeaderListItem" onClick={() => redirect("About")}>About</li>
                            <li id="HeaderListClothingItem" onMouseEnter={handleClothingOptions} onMouseLeave={handleClothingOptions}>
                                <div id="HeaderListClothing">
                                    <a id="HeaderListClothingLink" href="/clothes">Clothing</a>
                                    <div id="ClothingOptionsContainer" style={{ display: clothingOptions ? "flex" : "none" }} className={ clothingOptions ? "down" : "" }>
                                        <div id="ClothingOptionsSale">
                                            <a id="ClothingOptionsSaleButton" href="/clothes/sale">Sale Clothing</a>
                                        </div>
                                        <div id="ClothingOptionsSold">
                                            <a id="ClothingOptionsSoldButton" href="/clothes/sold">Sold Clothing</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="HeaderListItem" onClick={() => redirect("Contact")}>Contact</li>
                            <li className="HeaderListItem" onClick={() => {setWishlistItems(getWishlistItems()); setWishlistModalOpen(true)}}>
                                <FaHeart style={{ color: "red" }}/>
                            </li>
                        </ul>
                        {wishlistModalOpen && 
                            <WishlistModal 
                                wishlistItems={wishlistItems}
                                requestWishlistItems={() => {setWishlistItems(getWishlistItems()); setWishlistModalOpen(true)}}
                                closeWishlistModal={() => setWishlistModalOpen(false)}
                            />
                        }
                    </>
                )}
            </div>

        <style>
            {`

                #Header {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 10vh;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(0, 0, 0, 0);
                    border-bottom: 1px solid black;
                    z-index: 3;
                }

                #HeaderContainer {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0);
                    transition: 0.5s;
                }

                #HeaderContainer.scrolled {
                    width: 100%;
                    padding: 0 2.5%;
                    background-color: rgba(0, 0, 0, 0.85);
                }

                #HeaderLogoContainer {
                    display: flex;
                    position: relative;
                    width: 300px;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }

                #HeaderLogo {
                    width: 30px;
                    height: 30px;
                }

                #HeaderListContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .HeaderListItem {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }

                .HeaderListItem:hover {
                    opacity: 0.5;
                    cursor: pointer;
                }

                #HeaderListClothingItem {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }

                #HeaderListClothingLink {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    color: black;
                }

                #HeaderListClothingLink:hover {
                    opacity: 0.5;
                    cursor: pointer;
                }                

                #ClothingOptionsContainer {
                    display: flex;
                    positon: absolute;
                    width: 170%;
                    height: 10vh;
                    margin-top: -1vh;
                    margin-left: -35%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid black;
                    border-radius: 0 0 25px 25px;
                    z-index: 2;
                }

                @keyframes slide-down {
                    from { transform: translateY(-7vh); opacity: 0; }
                    to { transform: transalateY(0vh); opacity: 1; }
                }

                #ClothingOptionsContainer.down {
                    animation: slide-down 0.5s ease-in-out;
                }

                #ClothingOptionsSale, #ClothingOptionsSold {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                }

                #ClothingOptionsSale { border-bottom: 1px solid black; } 

                #ClothingOptionsSaleButton:hover, #ClothingOptionsSoldButton:hover {
                    opacity: 0.5;
                }

                #MobileHeaderMenuContainer {
                    display: flex;
                    position: relative;
                    width: 20%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }

                #MobileHeaderListContainer {
                    display: grid;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    grid-template-columns: 1fr 1fr 1fr;
                    align-items: center;
                    gap: 10px;
                }

                .MobileHeaderListItem {
                    display: flex;
                    height: 60%;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    font-size: 18px;
                    border: 1px solid black;
                    border-radius: 25px;
                }

                .MobileHeaderListItem:hover {
                    cursor: pointer;
                    opacity: 0.5;
                }

                @media (max-width: 600px) {
                    #HeaderLogo { width: 200px; height: 75px; margin-left: 10px; }
                    #MenuContainer { display: none; }
                }

            `}
        </style>
        </div>
    );
};