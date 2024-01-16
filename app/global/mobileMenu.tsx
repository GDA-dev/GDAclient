import React from "react";
import redirect from "../../utils/redirectWithoutReload";
import { useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Input } from '@chakra-ui/react';

export default function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button colorScheme='teal' onClick={onOpen}>Open</Button>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
                <ul id="HeaderListContainer">
                    <li className="HeaderListItem" onClick={() => redirect("Hero")}>Home</li>
                    <li className="HeaderListItem" onClick={() => redirect("About")}>About</li>
                    <li className="HeaderListItem" onClick={() => redirect("Hero")}>Home</li>
                    <li className="HeaderListItem" onClick={() => redirect("About")}>About</li>
                </ul>
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </>
    );
};