import axios from "axios";
import { env } from '../../utils/env';
import { Clothing } from "../../utils/types";

export default function updateSoldClothingByID(data: Clothing, id: string) {
    try {

        axios.put(`${env.API_URL}/sold_clothes/update/${id}/`, data);

    } catch (error) {
       
        console.log(error);
        return error;

    };
};