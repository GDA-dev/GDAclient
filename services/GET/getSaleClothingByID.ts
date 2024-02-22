import axios from "axios"
import { env } from "../../utils/env"

export default async function getSaleClothingByID(id: string) {
    try {
        const res = await axios.get(`${env.API_URL}/sale_clothes/id/${id}/`);
        return res.data;
    } catch (error) {
        return error;
    };
};