import React, { useState } from "react";
import { useNavigate } from '@remix-run/react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Sale } from "../../utils/types";

interface SaleCardProps {
    clothing: Sale;
    inWishlist: boolean;
};

const SaleCard: React.FC<SaleCardProps> = ({ clothing, inWishlist }) => {

    const [wishlist, setWishlist] = useState(inWishlist);
    const navigate = useNavigate();
    
    const redirectByID = (id: number | undefined) => {
        navigate(`/clothes/sale/${id}`);
    };

    const addToWishlist = () => {
        const wishlistString = localStorage.getItem("wishlist");
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
        const clothingString = JSON.stringify(clothing);
        if (wishlist.length === 0) {
            localStorage.setItem("wishlist", `[${clothingString}]`);
            setWishlist(true)
        } else {
            const found = wishlist.find((item: Sale) => item === clothing);
            if (found) {
                return;
            } else {
                const updatedWishlist = wishlist.append(clothing);
                localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                setWishlist(true)
            };
        };
    };

    const deleteFromWishlist = () => {
        const wishlistString = localStorage.getItem("wishlist");
        const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
        if (wishlist.length !== 0) {
            const found = wishlist.find((item: Sale, index: number) => {
                if (item === clothing) {
                    return index;
                };
            });
            if (found) {
                const updatedWishlist = wishlist.splice(found, 1);
                localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                setWishlist(false);
            };
        };
        setWishlist(false);
    };
    
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
                        <Text color='blue.600' fontSize='2xl'>{clothing.price}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={() => redirectByID(clothing.id)}>View</Button>
                        <Button variant='ghost' colorScheme='blue'>
                            {wishlist ? (
                                <FaHeart onClick={deleteFromWishlist} style={{ color: "red" }} /> 
                            ) : (
                                <FaRegHeart onClick={addToWishlist} /> 
                            )}
                            Add to wishlist 
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default SaleCard;