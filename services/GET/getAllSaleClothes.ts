import axios from "axios";
import { env } from "../../utils/env";

export default async function getAllSaleClothes() {
    try {
        const res = await axios.get(`${env.API_URL}/sale_clothes/`);
        return res.data;
    } catch (error) {
        return error;
    };
};