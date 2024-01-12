import React, { useState } from "react";
import cloudinaryUpload from "../../../../services/POST/cloudinaryUpload";

export default function CreateImage() {
    
    const [imageURLArray, setImageURLArray] = useState<string[]>([]);

    const sendImage = async (value: any) => {
        console.log("createImage value:", value.target.files?.[0])
        const res = await cloudinaryUpload(value.target.files?.[0]);
        setImageURLArray([...imageURLArray, res]);
        console.log("createImage res: ")
        console.log("createImage ImageArray: ", imageURLArray)
    };
    
    return (
        <div>
            <input id="UploadFile" type="file" onChange={(value) => sendImage(value)} />
            {imageURLArray.map((image: string) => (
                <div id='ImagePreview' key={image}>

                </div>
            ))}
        </div>
    );
};