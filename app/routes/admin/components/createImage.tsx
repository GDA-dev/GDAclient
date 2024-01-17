import React, { useState } from "react";
import cloudinaryUpload from "../../../../services/POST/cloudinaryUpload";

export default function CreateImage() {
    
    const [imageURLArray, setImageURLArray] = useState<string[]>([]);

    const sendImage = async (value: any) => {
        const res = await cloudinaryUpload(value.target.files?.[0]);
        setImageURLArray([...imageURLArray, res]);
    };
    
    return (
        <div>
            <input id="UploadFile" type="file" accept="image/*" onChange={(value) => sendImage(value)} />
            {imageURLArray.map((image: string, index: number) => (
                <div id='ImagePreview' key={index}>
                    <img src={image} alt="" />
                </div>
            ))}
        </div>
    );
};