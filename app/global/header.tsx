import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from '@remix-run/react';
import MobileMenu from "./mobileMenu";
import WishlistModal from "../containers/wishlistModal";
import { getWishlistItems } from "../../utils/localStorage";
import headerLogo from "../../public/headerLogo.jpg"
import { FaHeart } from 'react-icons/fa';
import { Clothing } from "../../utils/types";

export default function Header() {
    
    const [clothingOptionsView, setClothingOptionsView] = useState(false);
    const [clothingOptionsAnimation, setClothingOptionsAnimation] = useState(false);
    const [showItemBackground, setShowItemBackground] = useState("none");
    const [horizontalPercentage, setHorizontalPercentage] = useState("0%");
    const [verticalPercentage, setVerticalPercentage] = useState("0%");
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
            }, 1000);
        } else {
            scrollToSection(option);
        };
    };

    const updateItemBackgroundPercentage = (percentage: string, direction: string) => {
        if (direction === "horizontal") {
            setShowItemBackground("flex");
            setVerticalPercentage("22.5%");
            setHorizontalPercentage(percentage);
        } else if (direction === "vertical") {
            setShowItemBackground("flex");
            setVerticalPercentage(percentage);
            setHorizontalPercentage("60%");
        };
    };

    const hideItemBackground = () => {
        setShowItemBackground("none");
        setHorizontalPercentage("0%");
        setVerticalPercentage("-50%");
    };

    const openClothingOptions = () => {
        setClothingOptionsView(true);
        setClothingOptionsAnimation(true);
    };

    const closeClothingOptions = () => {
        setClothingOptionsAnimation(false);
        setTimeout(() => {
            setClothingOptionsView(false);
        }, 500);
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
            <div id="HeaderContainer" className={ scrolled ? 'scrolled' : '' }>
                <div id="HeaderLogoContainer">
                    <a href="/"><img id="HeaderLogo" src={headerLogo} alt="Genet Design's and Alterations Logo" /></a>
                </div>
                {showMobileView ? (
                    <div id="MobileHeaderMenuContainer">
                        <MobileMenu />
                    </div>
                ) : (
                    <>
                        <ul id="HeaderListContainer" onMouseLeave={hideItemBackground}>
                            <div id="HeaderListBackground"></div>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("0%", "horizontal")} onClick={() => redirect("Hero")}><p>Home</p></li>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("20%", "horizontal")} onClick={() => redirect("About")}><p>About</p></li>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("40%", "horizontal")} onClick={() => redirect("Contact")}><p>Contact</p></li>
                            <li id="HeaderClothingListItem" onMouseEnter={() => { openClothingOptions(); updateItemBackgroundPercentage("60%", "horizontal"); }} onMouseLeave={closeClothingOptions}>
                                <div id="HeaderListClothing">
                                    <div id="HeaderListClothingButton">Clothing</div>
                                    <div id="ClothingOptionsContainer" style={{ display: clothingOptionsView ? "flex" : "none" }} className={ clothingOptionsAnimation ? "down" : "up" }>
                                        <div id="ClothingOptionsSale" onMouseEnter={() => updateItemBackgroundPercentage("100%", "vertical")}>
                                            <a id="ClothingOptionsSaleButton" href="/clothes/sale">Sale Clothing</a>
                                        </div>
                                        <div id="ClothingOptionsSold" onMouseEnter={() => updateItemBackgroundPercentage("150%", "vertical")}>
                                            <a id="ClothingOptionsSoldButton" href="/clothes/sold">Sold Clothing</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("80%", "horizontal")} onClick={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}>
                                <FaHeart style={{ color: "red", fontSize: "25px" }} />
                            </li>
                        </ul>
                        {wishlistModalOpen && 
                            <WishlistModal 
                                wishlistItems={wishlistItems}
                                requestWishlistItems={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}
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

                #HeaderListBackground {
                    display: ${showItemBackground};
                    position: absolute;
                    top: ${verticalPercentage};
                    left: ${horizontalPercentage};
                    width: 20%;
                    height: 55%;
                    border-radius: 25px;
                    background-color: rgba(0, 0, 0, 0.75);
                    transition: 0.5s;
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
                    cursor: pointer;
                    transition: 0.5s;
                }

                .HeaderListItem:hover, #HeaderClothingListItem:hover {
                    color: white;
                }

                #HeaderListClothing { border: 1px solid red; }

                #HeaderListClothingButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid blue;
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
                    transition: 0.5s;
                }

                @keyframes slide-down {
                    from { transform: translateY(-7vh); opacity: 0; }
                    to { transform: transalateY(0vh); opacity: 1; cursor: pointer; }
                }

                #ClothingOptionsContainer.down {
                    animation: slide-down 0.5s ease-in-out;
                }

                @keyframes slide-up {
                    from { transform: translateY(0vh); opacity: 1; cursor: pointer; }
                    to { transform: translateY(-7vh); opacity: 0; }
                }

                #ClothingOptionsContainer.up {
                    animation: slide-up 0.5s ease-in-out;
                }

                #ClothingOptionsSale, #ClothingOptionsSold {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                    cursor: none;
                    z-index: 4;
                }

                #ClothingOptionsSale { border-bottom: 1px solid black; } 

                #ClothingOptionsSaleButton:hover, #ClothingOptionsSoldButton:hover {
                    color: white;
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