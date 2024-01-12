import axios from 'axios';

export default async function cloudinaryUpload(uploadedFile: any) {
    try {

        const reader = new FileReader();
        reader.onload = async () => {

            const readerResult = reader.result;

            const readerResultToFormData = async (readerResult: any) => {

                const formData = new FormData();
                formData.append('file', readerResult);
                formData.append("upload_preset", "vweauohf");
                console.log('upload value: ', formData);

                const POST = async (formData: FormData) => {

                    const imageURL = await axios.post("https://api.cloudinary.com/v1_1/don8pmkp2/image/upload", formData);
                    console.log("cloundinary imageURL:", imageURL)
                    return imageURL.data.secure_url;

                };

                return POST(formData);

            };

            const imageURL = await readerResultToFormData(readerResult);
            return imageURL;

        };

        const res: any = await reader.readAsDataURL(uploadedFile);
        return res;

    } catch (error) {
        console.log(error);
        return error;
    };
};