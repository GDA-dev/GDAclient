import React, { useState, useEffect } from "react";
import { Select } from '@chakra-ui/react';
import filters from "../../utils/filters";
import { Clothing } from "../../utils/types";

interface SizeFilterProps {
    currentOptions: Clothing[];
    sendSelectedFilter: (filter: string) => void;
};

const SizeFilter: React.FC<SizeFilterProps> = ({ currentOptions, sendSelectedFilter }) => {
    
    type ValidOptionKeys = keyof typeof validOptions;
    const { sizes, sizeObj } = filters;

    const [validOptions, setValidOptions] = useState({
        XXS: 0,
        XS: 0, 
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        XXL: 0,
        OS: 0
    });

    const detectValidOptions = () => {
        for (let i = 0; i < currentOptions.length; i++) {
            
            const size = currentOptions[i].size;

            if (size in validOptions) {
                setValidOptions(prevOptions => ({
                    ...prevOptions,
                    [size]: prevOptions[size as ValidOptionKeys] + 1
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
                <option value="" disabled>Size Filter</option>
                {sizes.map((size: string, index: number) => {

                    const key = Object.keys(sizeObj).find(k => sizeObj[k] === size);

                    return (
                        <option id={key} key={index} value={key} disabled={validOptions[key as ValidOptionKeys] === 0}>{size}</option>
                    )
                })}
            </Select>
        </>
    );
};

export default SizeFilter;