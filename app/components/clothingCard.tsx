import React, { useState } from "react";
import { NavLink, unstable_useViewTransitionState } from '@remix-run/react';
import { addToWishlist, deleteFromWishlist } from "../../utils/localStorage";
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Clothing } from "../../utils/types";

interface SaleCardProps {
    clothing: Clothing;
    inWishlist?: boolean;
};

const ClothingCard: React.FC<SaleCardProps> = ({ clothing, inWishlist }) => {

    const [wishlist, setWishlist] = useState(inWishlist);
    const isTransitioning = unstable_useViewTransitionState(`${clothing.id}`);
    
    return (
        <>
            <Card maxW='sm' style={{ border: "1px solid black", borderRadius: "5px" }}>
                <CardBody>
                    <img
                        id="ClothingCardThumbnail"
                        src={clothing.thumbnail}
                        alt='Clothing Card Thumbnail'
                        style={{ viewTransitionName: isTransitioning ? "clothingThumbnailTransition" : undefined, borderRadius: "10px" }}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{clothing.title}</Heading>
                        <Text style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{clothing.description}</Text>
                        {clothing.price ? (
                            <Text color='blue.600' fontSize='2xl'>${clothing.price}</Text>
                        ) : (
                            <Text color='blue.600' fontSize='2xl'>Sold Out</Text>
                        )}
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup style={{ width: "100%", justifyContent: "space-around" }}>
                        <Button variant='solid' colorScheme='blue'>
                            <NavLink to={`${clothing.id}`} unstable_viewTransition>View</NavLink> 
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            {wishlist ? (
                                <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => setWishlist(deleteFromWishlist(clothing))}>
                                    <FaHeart style={{ color: "red", marginBottom: "3px" }} /> 
                                    <p>Added to Wishlist</p>
                                </div>
                            ) : (
                                <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => setWishlist(addToWishlist(clothing))}>
                                    <FaRegHeart style={{ marginBottom: "3px"}} />
                                    <p>Add to Wishlist</p>
                                </div>
                            )}
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default ClothingCard;