import axios from 'axios';

export default async function cloudinaryUpload(uploadedFile: any) {
    try {

        const formData = new FormData();
        formData.append('file', uploadedFile);
        formData.append("upload_preset", "");

        const res = await axios.post("", formData);
        return res.data.secure_url;

    } catch (error) {
        console.log(error);
        return error;
    };
};