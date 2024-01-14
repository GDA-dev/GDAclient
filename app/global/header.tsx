import React, { useState } from "react";

export default function Header() {
    
    const [clothingOptions, setClothingOptions] = useState(false);

    const openClothingOptions = () => {
        setClothingOptions(true);
    };

    const closeClothingOptions = () => {
        setClothingOptions(false);
    };
    
    return (
        <div id="Header">
            <div id="HeaderContainer">
                <div id="HeaderLeftContainer">
                    <div id="LogoContainer">
                        <a href="/"><img id="Logo" src="" alt="Genet Design's and Alterations Logo" /></a>
                    </div>
                </div>
                <div id="HeaderRightContainer">
                    <ul id="HeaderListContainer">
                        <li className="HeaderListItem">Home</li>
                        <li className="HeaderListItem">About</li>
                        <li className="HeaderListItem" onMouseOver={openClothingOptions} onMouseLeave={closeClothingOptions}>
                            Clothing
                            {clothingOptions && 
                                <div id="ClothingOptionsContainer" className={clothingOptions ? "down" : "up"}>
                                    <div id="ClothingOptionsSale">
                                        <a id="ClothingOptionsSaleButton" href="/clothes/sale">Sale Clothing</a>
                                    </div>
                                    <div id="ClothingOptionsSold">
                                        <a id="ClothingOptionsSoldButton" href="/clothes/sold">Sold Clothing</a>
                                    </div>
                                </div>
                            }
                        </li>
                        <li className="HeaderListItem">Contact</li>
                    </ul>
                </div>
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
                    border-bottom: 1px solid black;
                    z-index: 3;
                }

                #HeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                #HeaderLeftContainer {
                    display: flex;
                    position: relative;
                    width: 20%;
                    height: 100%;
                    margin-left: 5%;
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
                    margin-right: 10%;
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
                    width: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }

                .HeaderListItem:hover {
                    opacity: 0.8;
                    cursor: pointer;
                }

                @keyframes slide-down {
                    0% { margin-top: -18vh; opacity: 0; }
                    100% { margin-top: 0; opacity: 1; }
                }

                @keyframes slide-up {
                    0% { margin-top: 0; opacity: 1; }
                    100% { margin-top: -18vh; opacity: 0; }
                }

                #ClothingOptionsContainer {
                    display: flex;
                    positon: absolute;
                    margin-top: 18vh;
                    width: 100%;
                    height: 90px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid black;
                    border-radius: 0 0 25px 25px;
                }

                #ClothingOptionsContainer.down {
                    animation: slide-down 2s ease-in-out;
                }
                
                #ClothingOptionsContainer.up {
                    animation: slide-up 2s ease-in-out;
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

                #ClothingOptionsSaleButton, #ClothingOptionsSoldButton {
                    
                }

            `}
        </style>
        </div>
    );
};