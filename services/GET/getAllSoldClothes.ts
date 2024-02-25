import axios from "axios";
import { env } from "../../utils/env";

export default async function getAllSoldClothes() {
    try {
        const res = await axios.get(`${env.API_URL}/sold_clothes/`);
        return res.data;
    } catch (error) {
        return error;
    };
};