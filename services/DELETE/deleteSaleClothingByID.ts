import axios from "axios";

export default function deleteSaleClothingByID(id: string) {
   try {

        axios.delete(`${process.env.API_URL}/sale_clothes/delete/${id}/`);

   } catch (error) {

        console.log(error);
        return error;
        
   }; 
};