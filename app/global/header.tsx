import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from '@remix-run/react';
import MobileMenu from "./mobileMenu";
import WishlistModal from "../containers/wishlistModal";
import { getWishlistItems } from "../../utils/localStorage";
import headerLogo from "../../public/headerLogo.jpg"
import { FaHeart } from 'react-icons/fa';
import { Clothing } from "../../utils/types";

export default function Header() {
    
    const [clothingOptions, setClothingOptions] = useState(false);
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState<Clothing[]>([]);
    const [scrolled, setScrolled] = useState(false);
    const [showMobileView, setShowMobileView] = useState(false);
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    const redirect = (option: string) => {
    
        const scrollToSection = (option: string) => {
            const section = document.getElementById(option);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
        };
    
        if (currentPath !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToSection(option);
            }, 1);
        } else {
            scrollToSection(option);
        };
    };

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
                    <a href="/"><img id="HeaderLogo" src={headerLogo} alt="Genet Design's and Alterations Logo" /></a>
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
                            <li id="HeaderClothingListItem" onMouseEnter={handleClothingOptions} onMouseLeave={handleClothingOptions}>
                                <div id="HeaderListClothing">
                                    <div id="HeaderListClothingButton">Clothing</div>
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
                                <FaHeart style={{ color: "red", fontSize: "25px" }} />
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
                    backdrop-filter: blur(5px);
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
                    backdrop-filter: blur(5px);
                    transition: 0.5s;
                }

                #HeaderContainer.scrolled {
                    width: 100%;
                    padding: 0 2.5%;
                    backdrop-filter: blur(50px);
                }

                #HeaderLogoContainer {
                    display: flex;
                    position: relative;
                    width: 300px;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }

                #HeaderLogoContainer a {
                    display: flex;
                    height: 100%;
                    align-items: center;
                }

                #HeaderLogo { height: 100%; }

                #HeaderListContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .HeaderListItem, #HeaderClothingListItem {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    font-size: 17px;
                    cursor: default;
                }

                .HeaderListItem:hover {
                    opacity: 0.5;
                    cursor: pointer;
                }

                #HeaderListClothingButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    color: black;
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
                    font-size: 16px;
                    background-color: white;
                    border: 1px solid black;
                    border-top: none;
                    border-radius: 0 0 25px 25px;
                    z-index: 4;
                }

                @keyframes slide-down {
                    from { transform: translateY(-7vh); opacity: 0; }
                    to { transform: transalateY(0vh); opacity: 1; cursor: pointer; }
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
                    cursor: none;
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
                    #HeaderLogoContainer { justify-content: flex-start; }
                    #MenuContainer { display: none; }
                }

            `}
        </style>
        </div>
    );
};