import React, { useState } from "react";
import { NavLink, unstable_useViewTransitionState, useLocation } from '@remix-run/react';
import { addToWishlist, deleteFromWishlist } from "../../utils/localStorage";
import { Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Clothing } from "../../utils/types";

interface SaleCardProps {
    clothing: Clothing;
    inWishlist?: boolean;
};

const ClothingCard: React.FC<SaleCardProps> = ({ clothing, inWishlist }) => {

    const [wishlist, setWishlist] = useState(inWishlist);
    const isTransitioning = unstable_useViewTransitionState(`${clothing.id}`);
    const location = useLocation();

    const updateWishlistState = () => {
        if (wishlist) {
            setWishlist(deleteFromWishlist(clothing));
        } else {
            setWishlist(addToWishlist(clothing));
        };
    };
    
    return (
        <Card style={{ display: "flex", height: "100%", alignItems: "flex-start" }}>
            <NavLink to={`${clothing.id}`} unstable_viewTransition>
                <CardBody>
                    <Image
                        id={`ClothingCardThumbnail${clothing.id}`}
                        src={clothing.thumbnail}
                        alt='Clothing Card Thumbnail'
                        style={ isTransitioning && (location.pathname === "/clothes/sale" || location.pathname === "/clothes/sale") ? { viewTransitionName: "clothing-image", borderRadius: "5px" } : { borderRadius: "5px" } }
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{clothing.title}</Heading>
                        {clothing.price ? (
                            <Text fontSize='lg'>${clothing.price}</Text>
                        ) : (
                            <Text fontSize='lg'>Sold Out</Text>
                        )}
                    </Stack>
                </CardBody>
            </NavLink>
            <Button variant='ghost' onClick={updateWishlistState} style={{ margin: "0 0 10px 10px" }}>
                {wishlist ? (
                    <FaHeart style={{ color: "red" }} /> 
                ) : (
                    <FaRegHeart />
                )}
            </Button>
        </Card>
    );
};

export default ClothingCard;