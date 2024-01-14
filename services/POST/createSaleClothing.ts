import axios from "axios";
import { Sale } from "../../utils/types";

export default function createSaleClothing(data: Sale) {
    try {

        axios.post(`${process.env.API_URL}/sale_clothes/new/`, data);

    } catch (error) {

        console.log(error);
        return error;

    };
};