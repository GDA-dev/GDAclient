import axios from "axios";
import { env } from '../../utils/env';
import { Clothing } from "../../utils/types";

export default function createSaleClothing(data: Clothing) {
    try {

        axios.post(`${env.API_URL}/sale_clothes/new/`, data);

    } catch (error) {

        console.log(error);
        return error;

    };
};