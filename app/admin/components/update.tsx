import React from "react";
import { NavLink } from "@remix-run/react";
import updateSaleClothingByID from "../../../services/PUT/updateSaleClothingByID";
import updateSoldClothingByID from "../../../services/PUT/updateSoldClothingByID";
import { Clothing } from "../../../utils/types";

interface UpdateProps {
    clothing: Clothing;
    clothingType: string;
};

const Update: React.FC<UpdateProps> = ({ clothing, clothingType }) => {
    return (
        <div>
            
        </div>
    );
};

export default Update;