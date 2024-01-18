import axios from "axios";
import { env } from '../../utils/env';

export default function checkCredentials(name: string, password: string) {
    try {

        const creds: any = axios.get(`${env.API_URL}/auth/${name}/${password}/`);

        if (creds.data.res === 'true') {
            return true;
        } else {
            return false;
        };

    } catch (error) {
        
        console.log(error);
        return error;

    };
};