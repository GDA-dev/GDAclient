import axios from 'axios';
import { env } from '../../utils/env';

export default async function cloudinaryUpload(uploadedFile: any) {
    try {

        const formData = new FormData();
        formData.append('file', uploadedFile);
        formData.append("upload_preset", `${env.CLOUDINARY_PRESET}`);

        const res = await axios.post(`${env.CLOUDINARY_URL}`, formData);
        return res.data.secure_url;

    } catch (error) {
        return error;
    };
};