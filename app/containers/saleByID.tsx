import React from "react";
import IndividualClothing from "../components/individualClothing";
import { Clothing } from "../../utils/types";

interface SaleByIDProps {
    saleClothing: Clothing;
};

const SaleByID: React.FC<SaleByIDProps> = ({ saleClothing }) => {

    
    
    return (
        <div id="SaleByID">
            <div id="SaleByIDContainer">
                <IndividualClothing clothing={saleClothing} />
            </div>
            <style>
                {`
                    
                    #SaleByID {
                        display: flex;
                        position: fixed;
                        top: 10vh;
                        left: 0;
                        width: 100vw;
                        height: 90vh;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.85);
                        z-index: 4;
                    }

                `}
            </style>
        </div>
    );
};

export default SaleByID;