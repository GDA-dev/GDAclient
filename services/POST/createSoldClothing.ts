import axios from "axios";
import { env } from '../../utils/env';
import { Clothing } from "../../utils/types";

export default function createSoldClothing(data: Clothing) {
    try {
        
        axios.post(`${env.API_URL}/sold_clothes/new/`, data);

    } catch (error) {

        console.log(error);
        return error;

    };
};