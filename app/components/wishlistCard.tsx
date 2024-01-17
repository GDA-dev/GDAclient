import React from 'react';
import { useNavigate } from '@remix-run/react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { Clothing } from '../../utils/types';

interface WishlistCardProps {
    clothing: Clothing;
    deleteClothing: () => void;
};

const WishlistCard: React.FC<WishlistCardProps> = ({ clothing, deleteClothing }) => {

    const navigate = useNavigate();

    const redirect = (type: string) => {
        navigate(`/clothes/${type}/${clothing.id}`);
    };

    const checkClothingType = () => {
        if (clothing.price) {
            redirect('sale');
        } else {
            redirect('sold');
        };
    };

    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={clothing.thumbnail}
                    alt='Wishlist Clothing Thumbnail'
                />
                <Stack>
                    <CardBody>
                        <Heading size='md'>{clothing.title}</Heading>
                        <Text py='2'>{clothing.description}</Text>
                    </CardBody>
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' onClick={checkClothingType}>View Clothing</Button>
                        <Button variant='solid' colorScheme='red' onClick={deleteClothing}>Delete</Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
};

export default WishlistCard;