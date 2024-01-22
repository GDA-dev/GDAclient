import React, { useState, useEffect } from "react";
import { Select } from '@chakra-ui/react';
import { Clothing } from "../../utils/types";

interface CategoryFilterProps {
    currentOptions: Clothing[];
    sendSelectedFilter: (filter: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ currentOptions, sendSelectedFilter }) => {
    
    const categories = [
        "Clothing, Top",
        "Clothing, Bottom", 
        "Clothing, Other",
        "Accessories",
        "Other"
    ];

    const categoryObj: { [key: string]: string; } = {
        CT: "Clothing, Top",
        CB: "Clothing, Bottom", 
        CO: "Clothing, Other",
        A: "Accessories",
        O: "Other"
    };
    
    type ValidOptionKeys = keyof typeof validOptions;
    const [validOptions, setValidOptions] = useState({
        CT: 0,
        CB: 0,
        CO: 0,
        A: 0,
        O: 0
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
            <Select placeholder='Clothing Type Filter' borderColor="pink">
                {categories.map((category: string) => {

                    const key = Object.keys(categoryObj).find(k => categoryObj[k] === category);
                    
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
                        <option id={key} value={category} onClick={() => sendSelectedFilter(category)}>{category}</option>
                    )
                })}
            </Select>
        </>
    );
};

export default CategoryFilter;