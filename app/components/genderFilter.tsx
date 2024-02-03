import React, { useState, useEffect } from "react";
import { Select } from '@chakra-ui/react';
import { Clothing } from "../../utils/types";

interface GenderFilterProps {
    currentOptions: Clothing[];
    sendSelectedFilter: (filter: string) => void;
};

const GenderFilter: React.FC<GenderFilterProps> = ({ currentOptions, sendSelectedFilter }) => {
    
    type ValidOptionKeys = keyof typeof validOptions;
    
    const genders = [
        "Male",
        "Female", 
        "Unisex"
    ];

    const genderObj: { [key: string]: string; } = {
        M: "Male",
        F: "Female", 
        U: "Unisex"
    };
    
    const [validOptions, setValidOptions] = useState({
        M: 0,
        F: 0,
        U: 0
    });

    const detectValidOptions = () => {
        for (let i = 0; i < currentOptions.length; i++) {
            
            const gender = currentOptions[i].gender;

            if (gender in validOptions) {
                setValidOptions(prevOptions => ({
                    ...prevOptions,
                    [gender]: prevOptions[gender as ValidOptionKeys] + 1
                }));
            };
        };
    };

    useEffect(() => {
        detectValidOptions();
    }, [currentOptions]);
    
    return (
        <>
            <Select borderColor="pink" defaultValue="" onChange={(e) => sendSelectedFilter(e.target.value)}>
                <option value="" disabled>Gender Filter</option>
                {genders.map((gender: string, index: number) => {

                    const key = Object.keys(genderObj).find(k => genderObj[k] === gender);

                    return (
                        <option id={key} key={index} value={key} disabled={validOptions[key as ValidOptionKeys] === 0}>{gender}</option>
                    )
                })}
            </Select>
        </>
    );
};

export default GenderFilter;