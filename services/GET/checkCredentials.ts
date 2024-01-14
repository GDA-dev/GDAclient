import axios from "axios";

export default function checkCredentials(name: string, password: string) {
    try {

        const creds: any = axios.get(`${process.env.API_URL}/auth/${name}/${password}/`);

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