import axios from "axios";
import { env } from '../../utils/env';

export default async function checkCredentials(username: string, password: string) {
    try {

        const res: any = await axios.get(`${env.API_URL}/auth/${username}/${password}/`);

        if (res.data.res === 'true' && res.status === 200) {
            return true;
        } else {
            return false;
        };
        
    } catch (error) {
        return false;
    };
};