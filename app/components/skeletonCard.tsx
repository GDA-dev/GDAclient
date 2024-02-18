import React from "react";
import { SkeletonText, Card, CardBody, Image, Stack, Button } from "@chakra-ui/react";
import skeletonImage from "../../public/skeletonImage.gif";
import { FaRegHeart } from "react-icons/fa";

export default function SkeletonCard() {
    
    return (
        <>
            <Card className="flex h-full items-start">
                <CardBody>
                    <Image
                        src={skeletonImage}
                        alt='Image of Clothing'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <SkeletonText />
                    </Stack>
                </CardBody>
                <Button variant='ghost' className="ml-[10px] mb-[10px]">
                    <FaRegHeart />
                </Button>
            </Card>
        </>
    );
};