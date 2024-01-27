import React, { useState } from "react";
import { useNavigate } from '@remix-run/react';
import { addToWishlist, deleteFromWishlist } from "../../utils/localStorage";
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Clothing } from "../../utils/types";

interface SaleCardProps {
    clothing: Clothing;
    inWishlist?: boolean;
};

const ClothingCard: React.FC<SaleCardProps> = ({ clothing, inWishlist }) => {

    const [wishlist, setWishlist] = useState(inWishlist);
    const navigate = useNavigate();
    
    return (
        <>
            <Card maxW='sm' style={{ border: "1px solid black", borderRadius: "5px"}}>
                <CardBody>
                    <Image
                        src={clothing.thumbnail}
                        alt='Image of Clothing'
                        borderRadius='lg'
                        fit="cover"
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
                        <Button variant='solid' colorScheme='blue' style={{ display: "flex" }} onClick={() => navigate(`${clothing.id}`)}>View</Button>
                        <Button variant='ghost' colorScheme='blue' style={{ display: "flex", flexDirection: "column",  }}>
                            {wishlist ? (
                                <>
                                    <FaHeart onClick={() => setWishlist(deleteFromWishlist(clothing))} style={{ color: "red", marginBottom: "3px" }} /> 
                                    <p>Added to Wishlist</p>
                                </>
                            ) : (
                                <>
                                    <FaRegHeart onClick={() => setWishlist(addToWishlist(clothing))} style={{ marginBottom: "3px"}} />
                                    <p>Add to Wishlist</p>
                                </>
                            )}
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default ClothingCard;