import axios from "axios";

export default function deleteSoldClothingByID(id: string) {
    try {

        axios.delete(`${process.env.API_URL}/sold_clothes/delete/${id}/`);

    } catch (error) {

        console.log(error);
        return error;

    };
};