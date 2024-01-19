import React from "react";
import skeletonImage from "../../public/skeletonImage.gif";
import { SkeletonText, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

export default function SkeletonCard() {
    
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={skeletonImage}
                        alt='Image of Clothing'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'><SkeletonText /></Heading>
                        <Text><SkeletonText /></Text>
                        <Text color='blue.600' fontSize='2xl'><SkeletonText /></Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'><SkeletonText /></Button>
                        <Button variant='ghost' colorScheme='blue'>
                            <FaRegHeart />
                            Add to Wishlist                       
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};