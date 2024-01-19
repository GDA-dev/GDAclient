import React, { useState } from "react";
import { addToWishlist, deleteFromWishlist } from "../../utils/localStorage";
import { redirectById } from "../../utils/redirectWithoutReload";
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Clothing } from "../../utils/types";

interface SaleCardProps {
    clothing: Clothing;
    inWishlist?: boolean;
};

const ClothingCard: React.FC<SaleCardProps> = ({ clothing, inWishlist }) => {

    const [wishlist, setWishlist] = useState(inWishlist);
    const clothingType = clothing.price ? "sale" : "sold";
    
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={clothing.thumbnail}
                        alt='Image of Clothing'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{clothing.title}</Heading>
                        <Text>{clothing.description}</Text>
                        {clothing.price ? (
                            <Text color='blue.600' fontSize='2xl'>{clothing.price}</Text>
                        ) : (
                            <Text color='blue.600' fontSize='2xl'>Sold Out</Text>
                        )}
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={() => redirectById(clothing.id, clothingType)}>View</Button>
                        <Button variant='ghost' colorScheme='blue'>
                            {wishlist ? (
                                <FaHeart onClick={() => setWishlist(deleteFromWishlist(clothing))} style={{ color: "red" }} /> 
                            ) : (
                                <FaRegHeart onClick={() => setWishlist(addToWishlist(clothing))} /> 
                            )}
                            Add to wishlist 
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default ClothingCard;