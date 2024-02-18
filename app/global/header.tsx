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
        if (verticalPercentage !== "0%") {
            setClothingOptionsView(true);
            setClothingOptionsAnimation(true);
        } else {
            closeClothingOptions();
        };
        updateItemBackgroundPercentage("60%", "horizontal");
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
                        <ul id="HeaderListContainer" onMouseLeave={() => { hideItemBackground(); closeClothingOptions(); }}>
                            <div id="HeaderListBackground"></div>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("0%", "horizontal")} onClick={() => redirect("Hero")}><p>Home</p></li>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("20%", "horizontal")} onClick={() => redirect("About")}><p>About</p></li>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("40%", "horizontal")} onClick={() => redirect("Contact")}><p>Contact</p></li>
                            <li className="HeaderListItem" onMouseEnter={openClothingOptions}><p>Clothing</p></li>
                            <li className="HeaderListItem" onMouseEnter={() => updateItemBackgroundPercentage("80%", "horizontal")} onClick={() => { setWishlistItems(getWishlistItems()); setWishlistModalOpen(true); }}>
                                <FaHeart className="text-red-600 text-2xl" />
                            </li>
                            <div id="HeaderClothingOptionsContainer" style={{ display: clothingOptionsView ? "flex" : "none" }} className={ clothingOptionsAnimation ? "down" : "up" } onMouseEnter={openClothingOptions} onMouseLeave={closeClothingOptions}>
                                <div id="HeaderClothingOption" onMouseEnter={() => updateItemBackgroundPercentage("102.5%", "vertical")}>
                                    <a id="HeaderClothingOptionLink" href="/clothes/sale">Sale Clothing</a>
                                </div>
                                <div id="HeaderClothingOption" onMouseEnter={() => updateItemBackgroundPercentage("162.5%", "vertical")}>
                                    <a id="HeaderClothingOptionLink" href="/clothes/sold">Sold Clothing</a>
                                </div>
                            </div>
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
                    z-index: 2;
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
                    font-size: 17px;
                    cursor: pointer;
                    transition: 0.5s;
                    z-index: 3;
                }

                .HeaderListItem:hover {
                    color: white;
                }       

                #HeaderClothingOptionsContainer {
                    display: flex;
                    position: absolute;
                    bottom: -12vh;
                    right: 15%;
                    width: 30%;
                    height: 12vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 16px;
                    border: 1px solid black;
                    border-top: none;
                    border-radius: 0 0 25px 25px;
                    z-index: 2;
                    transition: 0.5s;
                }

                @keyframes slide-down {
                    from { transform: translateY(-12vh); }
                    to { transform: transalateY(0vh); }
                }

                #HeaderClothingOptionsContainer.down {
                    animation: slide-down 0.5s ease-in-out;
                }

                @keyframes slide-up {
                    from { transform: translateY(0vh); }
                    to { transform: translateY(-12vh); }
                }

                #HeaderClothingOptionsContainer.up {
                    animation: slide-up 0.5s ease-in-out;
                }

                #HeaderClothingOptionsContainer div:first-child {
                    border-bottom: 1px solid black;
                }

                #HeaderClothingOption {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }

                #HeaderClothingOptionLink {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }

                #HeaderClothingOptionLink:hover {
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