import React from "react";
import { Textarea, Heading, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import { Clothing } from "../../utils/types";

interface IndividualClothingProps {
    clothing: Clothing;
};

const IndividualClothing: React.FC<IndividualClothingProps> = ({ clothing }) => {

    const gallery = clothing.gallery;

    return (
        <>
            <div id="IndividualClothing">
                <div id="IndividualClothingContainer">
                    <div id="IndividualClothingLeftContainer">
                            {gallery.map((gallery: any) => (
                                <div id="IndividualClothingGalleryContainer">
                                    <img src={gallery} alt="Gallery of Clothing Item" id="IndividualClothingGallery" />
                                </div>
                            ))}
                    </div>
                    <div id="IndividualClothingRightContainer">
                        <div id="IndividualClothingTextContainer">
                            <Heading size='xl'>{clothing.title}</Heading>
                            <Textarea value={clothing.description} placeholder="Description" />
                            {clothing.price ? (
                                <Stat>
                                    <StatLabel fontSize='25px'>Clothing Price</StatLabel>
                                    <StatNumber>${clothing.price}</StatNumber>
                                </Stat>
                            ) : (
                                <Stat>
                                    <StatLabel fontSize='25px'>Clothing Price</StatLabel>
                                    <StatNumber>Sold Out</StatNumber>
                                </Stat>
                            )}
                        </div>
                        <div id="IndividualClothingInformationContainer">
                            <p id="IndividualClothingCategory">{clothing.category}</p>
                            <p id="IndividualClothingGender">{clothing.gender}</p>
                            <p id="IndividualClothingSize">{clothing.size}</p>
                            <p id="IndividualClothingMeasurements">{clothing.measurements}</p>
                            {clothing.notes ? (
                                <Textarea value={clothing.notes} placeholder="Extra Notes" />
                            ) : (
                                <Textarea placeholder='No Extra Information' />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};