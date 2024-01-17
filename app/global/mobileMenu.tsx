import React, { useState } from "react";
import WishlistModal from "../containers/wishlistModal";
import redirect from "../../utils/redirectWithoutReload";
import { getWishlistItems } from "utils/localStorage";
import { useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Input } from '@chakra-ui/react';
import { FaBars, FaHeart } from 'react-icons/fa';

export default function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([]);
  
    return (
        <>
            <Button colorScheme='white' onClick={onOpen}>
                <FaBars id='MobileHeaderOpen' style={{ color: "black", height: "5vh", width: "100%" }} />
            </Button>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton size="lg" />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <ul id="MobileHeaderListContainer">
                            <li className="MobileHeaderListItem" onClick={() => redirect("Hero")}>Home</li>
                            <li className="MobileHeaderListItem" onClick={() => redirect("About")}>About</li>
                            <li className="MobileHeaderListItem"><a href="/clothes/sale">Sale Clothing</a></li>
                            <li className="MobileHeaderListItem"><a href="/clothes/sold">Sold Clothing</a></li>
                            <li className="MobileHeaderListItem" onClick={() => redirect("Contact")}>Contact</li>
                            <li className="MobileHeaderListItem" onClick={() => {setWishlistItems(getWishlistItems()); setWishlistModalOpen(true)}}><FaHeart style={{ color: "red" }}/></li>
                            {wishlistModalOpen && 
                                <WishlistModal 
                                    wishlistItems={wishlistItems}
                                    requestWishlistItems={() => {setWishlistItems(getWishlistItems()); setWishlistModalOpen(true)}}
                                    closeWishlistModal={() => setWishlistModalOpen(false)}
                                />
                            }
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};