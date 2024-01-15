import React, { useState, useEffect } from "react";
import { useNavigate } from '@remix-run/react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
    
    const [clothingOptions, setClothingOptions] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMobileView, setShowMobileView] = useState(false);
    const [showBars, setShowBars] = useState(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileMenuItems, setShowMobileMenuItems] = useState(false);
    const navigate = useNavigate();

    const handleClothingOptions = () => {
        setClothingOptions(!clothingOptions);
    };

    const redirect = (option: string) => {
        const currentPath = window.location.pathname;
    
        if (currentPath !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToSection(option);
            }, 0);
        } else {
            scrollToSection(option);
        };
    };
    
    const scrollToSection = (option: string) => {
        const section = document.getElementById(option);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    };

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
            closeMobileHeader();
        }
    };

    const handleMediaQuery = () => {
        if (window.innerWidth < 600) {
            setShowBars(true);
            setShowMobileView(true);
            setShowMobileMenu(false);
        } else {
            setShowBars(false);
            setShowMobileView(false);
            setShowMobileMenu(false);
        }
    };

    const openMobileHeader = () => {
        setShowMobileMenu(true);
        setShowBars(false);
        setScrolled(true);
        setTimeout(() => {
            setShowMobileMenuItems(true);
        }, 1);
    };

    const closeMobileHeader = () => {
        setShowMobileMenu(false);
        setShowBars(true);
        if (window.scrollY <= 10) {
            setScrolled(false);
        }
        setTimeout(() => {
            setShowMobileMenuItems(false);
        }, 1);
    };

    useEffect(() => {

        if (window.innerWidth < 600) {
            setShowMobileView(true);
        } else {
            setShowMobileView(false);
        }

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
                <div id="HeaderLeftContainer">
                    <div id="LogoContainer">
                        <a href="/"><img id="Logo" src="" alt="Genet Design's and Alterations Logo" /></a>
                    </div>
                </div>
                {showMobileView ? (
                    <div id="MobileHeaderRightContainer">
                        {showBars ? (
                            <div id="MobileHeaderOpenContainer">
                                <FaBars id='MobileHeaderOpen' onClick={openMobileHeader} />
                            </div>
                        ) : (    
                            <div id="MobileHeaderCloseContainer">
                                <AiOutlineClose id='MobileHeaderClose' onClick={closeMobileHeader} />
                            </div>
                        )}
                        {showMobileMenu ? (
                            <div id='MobileHeaderMenu'>
                                <div id="MobileHeaderMenuItems" className={showMobileMenuItems ? 'opened' : ''}>
                                    <div id="MobileStadiumItemContainer">
                                        <a id="MobileStadiumItem" href="/stadiums">Stadiums</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                ) : (
                    <div id="HeaderRightContainer">
                        <ul id="HeaderListContainer">
                            <li className="HeaderListItem" onClick={() => redirect("Hero")}>Home</li>
                            <li className="HeaderListItem" onClick={() => redirect("About")}>About</li>
                            <li className="HeaderListItem" onMouseEnter={handleClothingOptions} onMouseLeave={handleClothingOptions}>
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
                        </ul>
                    </div>
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
                    padding: 0 -10%;
                }

                #HeaderContainer.scrolled {
                    padding: 0 2.5%;
                    background-color: rgba(0, 0, 0, 0.85);
                }

                #HeaderLeftContainer {
                    display: flex;
                    position: relative;
                    width: 20%;
                    height: 100%;
                }

                #LogoContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }

                #Logo {
                    width: 30px;
                    height: 30px;
                }

                #HeaderRightContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                }

                #HeaderListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
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
                    opacity: 0.7;
                    cursor: pointer;
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

                #ClothingOptionsContainer {
                    display: flex;
                    positon: absolute;
                    width: 170%;
                    height: 7vh;
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
                    opacity: 0.8;
                }

                @media (max-width: 600px) {
                    #HeaderContainer { display: none; }
                }

            `}
        </style>
        </div>
    );
};