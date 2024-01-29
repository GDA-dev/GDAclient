import React from 'react';
import { useNavigate } from '@remix-run/react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { Clothing } from '../../utils/types';

interface WishlistCardProps {
    clothing: Clothing;
    deleteClothing: () => void;
    closeWishlistModal: () => void;
};

const WishlistCard: React.FC<WishlistCardProps> = ({ clothing, deleteClothing, closeWishlistModal }) => {

    const clothingType = clothing.price ? "sale" : "sold";
    const navigate = useNavigate();

    const redirectById = (id: number | undefined, clothingType: string) => {
    
        if (clothingType === "sale") {
            navigate(`/clothes/sale/${id}`);
        } else if (clothingType === "sold") {
            navigate(`/clothes/sold/${id}`);
        };
    };

    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' style={{ width: "100%" }}>
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={clothing.thumbnail}
                    alt='Wishlist Clothing Thumbnail'
                />
                <Stack>
                    <CardBody>
                        <Heading size='md'>{clothing.title}</Heading>
                    </CardBody>
                    <CardFooter style={{ flexDirection: "column" }}>
                        <Button variant='solid' colorScheme='blue' onClick={() => { redirectById(clothing.id, clothingType); closeWishlistModal(); }}>View Clothing</Button>
                        <Button variant='solid' colorScheme='red' style={{ marginTop: "10px" }} onClick={deleteClothing}>Delete</Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
};

export default WishlistCard;