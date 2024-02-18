import React from "react";
import AdminCard from "../../admin/components/adminCard";
import { Clothing } from "../../../utils/types";

interface ViewProps {
    clothes: Clothing[];
    clothingType: string;
};

const View: React.FC<ViewProps> = ({ clothes, clothingType }) => {

    return (
        <div className="flex fixed bottom-0 right-0 w-[80vw] h-[75.5vh]">
            <div className="grid relative w-full h-full px-[3%] py-[2%] gap-[25px] overflow-y-scroll" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
                {clothes.map((clothing: Clothing, index: number) => (
                    <div key={index}>
                        <AdminCard clothing={clothing} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;