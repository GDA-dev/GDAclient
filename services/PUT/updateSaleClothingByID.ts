import axios from "axios";
import { Sale } from "../../utils/types";

export default function updateSaleClothingByID(data: Sale, id: string) {
    try {

        axios.put(`${process.env.API_URL}/sale_clothes/update/${id}/`, data);

    } catch (error){

        console.log(error);
        return error;

    };
};