import React from "react";
import deleteSaleClothingByID from "../../../services/DELETE/deleteSaleClothingByID";
import deleteSoldClothingByID from "../../../services/DELETE/deleteSoldClothingByID";
import { Clothing } from "../../../utils/types";

interface ViewProps {
    clothes: Clothing[];
    clothingType: string;
};

const View: React.FC<ViewProps> = ({ clothes, clothingType }) => {

    return (
        <div>

        </div>
    );
};

export default View;