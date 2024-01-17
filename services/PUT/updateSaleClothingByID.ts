import axios from "axios";
import { Clothing } from "../../utils/types";

export default function updateSaleClothingByID(data: Clothing, id: string) {
    try {

        axios.put(`${process.env.API_URL}/sale_clothes/update/${id}/`, data);

    } catch (error){

        console.log(error);
        return error;

    };
};