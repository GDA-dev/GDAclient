import { Clothing } from "./types";

export default function toArray(data: Clothing[]) {
    
    const res: Clothing[] = [];
    let galleryArray: string[] = [];
    let temp = "";

    for (let obj = 0; obj < data.length; obj++) {

        const gallery = data[obj].gallery

        for (let i = 0; i < gallery.length; i++) {
            if (gallery[i] != ',') {
                temp += gallery[i];
            } else {
                galleryArray.push(temp);
                temp = "";
            }
        };

        data[obj].gallery = galleryArray;
        res.push(data[obj]);
        galleryArray = [];

    };
    
    return res;

};