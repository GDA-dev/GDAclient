import axios from "axios";
import { env } from '../../utils/env';

export default function deleteSaleClothingByID(id: string) {
   try {

        axios.delete(`${env.API_URL}/sale_clothes/delete/${id}/`);

   } catch (error) {

        console.log(error);
        return error;
        
   }; 
};