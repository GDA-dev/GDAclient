import axios from "axios";
import { env } from '../../utils/env';

export default function deleteSoldClothingByID(id: string) {
    try {
        axios.delete(`${env.API_URL}/sold_clothes/delete/${id}/`);
    } catch (error) {
        return error;
    };
};