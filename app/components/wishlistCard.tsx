import React from 'react';
import { useNavigate } from '@remix-run/react';
import { Card, CardBody, Image, Stack, Heading, Button, ButtonGroup } from '@chakra-ui/react';
import { Clothing } from '../../utils/types';

interface WishlistCardProps {
    clothing: Clothing;
    deleteClothing: () => void;
    closeWishlistModal: () => void;
};

const WishlistCard: React.FC<WishlistCardProps> = ({ clothing, deleteClothing, closeWishlistModal }) => {

    const clothingType = clothing.price ? "sale" : "sold";
    const navigate = useNavigate();

    return (
        <>
            <Card variant='outline' className="flex w-full justify-between" style={{ flexDirection: "row" }}>
                <div className="h-full">
                    <Image
                        src={clothing.thumbnail}
                        alt='Wishlist Clothing Thumbnail'
                        className="h-full"
                    />
                </div>
                <Stack className="w-[60%] h-full border">
                    <CardBody className="flex flex-col justify-between">
                        <Heading size='lg'>{clothing.title}</Heading>
                        <ButtonGroup className="flex flex-col items-start">
                            <Button variant='solid' colorScheme='blue' onClick={() => { navigate(`/clothes/${clothingType}/${clothing.id}`); closeWishlistModal(); }}>View Clothing</Button>
                            <Button variant='solid' colorScheme='red' style={{ margin: "10px 0 0 0" }} onClick={deleteClothing}>Delete</Button>
                        </ButtonGroup>
                    </CardBody>
                </Stack>
            </Card>
        </>
    );
};

export default WishlistCard;