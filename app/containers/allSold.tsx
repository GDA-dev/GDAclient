import React from "react";
import ClothingCard from "~/components/clothingCard";
import CategoryFilter from "~/components/categoryFilter";
import GenderFilter from "~/components/genderFilter";
import SizeFilter from "~/components/sizeFilter";

import { Clothing } from "../../utils/types";

interface AllSoldProps {
    soldCards: Clothing[];
};


const AllSold: React.FC<AllSoldProps> = ({ soldCards }) => {
    
    
    
    return (
        <div id="AllSold">
            


        </div>
    );
};

export default AllSold;