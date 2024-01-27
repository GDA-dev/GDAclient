import axios from "axios";
import { env } from "../../utils/env";

export default async function getSoldClothingByID(id: string) {
    try {

        const res = await axios.get(`${env.API_URL}sold_clothes/id/${id}/`);
        return res.data;

    } catch (error) {

        console.log(error);
        return error;

    };
};