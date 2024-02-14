import React from "react";
import { Heading, Text, Image, Stack } from '@chakra-ui/react';
import { Clothing } from "../../utils/types";

interface IndividualClothingProps {
    clothing: Clothing;
    category: string;
    size: string;
    gender: string;
};

const IndividualClothing: React.FC<IndividualClothingProps> = ({ clothing, category, size, gender }) => {
    
    return (
        <>
            <div id="IndividualClothing">
                <div id="IndividualClothingContainer">
                    <div id="IndividualClothingLeftContainer">
                            {/* {clothing.gallery.map((gallery: string) => (
                                <div id="IndividualClothingGalleryContainer">
                                    <Image id="IndividualClothingGalleryImage" src={gallery} alt="Gallery Clothing Item Picture" />
                                </div>
                            ))} */}
                            <Image 
                                id="IndividualClothingThumbnail" 
                                src={clothing.thumbnail} 
                                alt="Clothing Item Picture"
                                style={{ viewTransitionName: "clothing-image" }}
                            />
                    </div>
                    <div id="IndividualClothingRightContainer">
                        <div id="IndividualClothingStackBackground" />
                        <Stack id="IndividualClothingStack" spacing={10}>
                            <Heading size='4xl'>{clothing.title}</Heading>
                            {clothing.price ? (
                                <Text fontSize='3xl'>${clothing.price}</Text>
                            ) : (
                                <Text>Sold Out</Text>
                            )}
                            <Text fontSize='2xl'>{clothing.description}</Text>
                            <Text fontSize='lg'>Category: {category}</Text>
                            <Text fontSize='lg'>Size: {size}</Text>
                            <Text fontSize='lg'>Gender: {gender}</Text>
                            <Text fontSize='lg'>Measurements: {clothing.measurements}</Text>
                            {clothing.notes ? (
                                <Text fontSize='md'>
                                    Notes: {clothing.notes}
                                    <br/>
                                    <br/>
                                    Contact Genet to purchase or request a custom order! (202-597-6466)
                                </Text>
                            ) : (
                                <Text>
                                    No Notes
                                    <br/>
                                    <br/>
                                    Contact Genet to purchase or request a custom order! (202-597-6466)
                                </Text>
                            )}
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndividualClothing;