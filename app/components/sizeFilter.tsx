import React, { useState, useEffect } from "react";
import { Select } from '@chakra-ui/react';
import { Clothing } from "../../utils/types";

interface SizeFilterProps {
    currentOptions: Clothing[];
    sendSelectedFilter: (filter: string) => void;
};

const SizeFilter: React.FC<SizeFilterProps> = ({ currentOptions, sendSelectedFilter }) => {
    
    const sizes = [
        "Extra Extra Small",
        "Extra Small",
        "Small",
        "Medium",
        "Large",
        "Extra Large",
        "Extra Extra Large",
        "One Size"
    ];

    const sizeObj: { [key: string]: string; } = {
        XXS: "Extra Extra Small",
        XS: "Extra Small", 
        S: "Small",
        M: "Medium",
        L: "Large",
        XL: "Extra Large",
        XXL: "Extra Extra Large",
        OS: "One Size"
    };

    type ValidOptionKeys = keyof typeof validOptions;
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
            const category = currentOptions[i].category;

            if (category in validOptions) {
                setValidOptions(prevOptions => ({
                    ...prevOptions,
                    [category]: prevOptions[category as ValidOptionKeys] + 1
                }));
            };
        };
    };

    useEffect(() => {
        detectValidOptions();
    }, [currentOptions]);
    
    return (
        <>
            <Select placeholder='Size Filter'  borderColor="pink">
                {sizes.map((size: string) => {

                    const key = Object.keys(sizeObj).find(k => sizeObj[k] === size);
                    
                    if (validOptions[key as ValidOptionKeys] === 0) {
                        if (typeof document !== 'undefined') {
                            const option = document.getElementById(`${key}`);
                            if (option) { 
                                option.style.opacity = '0.3';
                                option.style.cursor = 'not-allowed';
                            };
                        };
                    };

                    return (
                        <option id={key} value={size} onClick={() => sendSelectedFilter(size)}>{size}</option>
                    )
                })}
            </Select>
        </>
    );
};

export default SizeFilter;