import React from "react";
import skeletonImage from "../../public/skeletonImage.gif";
import { SkeletonText, Card, CardBody, Image, Stack, Button } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

export default function SkeletonCard() {
    
    return (
        <>
            <Card style={{ display: "flex", alignItems: "flex-start" }}>
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
                <Button variant='ghost' style={{ margin: "0 0 10px 10px" }}>
                    <FaRegHeart />
                </Button>
            </Card>
        </>
    );
};