import axios from "axios";
import { Sold } from "../../utils/types";

export default function createSoldClothing(data: Sold) {
    try {
        
        axios.post(`${process.env.API_URL}/sold_clothes/new/`, data);

    } catch (error) {

        console.log(error);
        return error;

    };
};