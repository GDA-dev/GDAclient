import React, { useState } from "react";
import { Input, Text, Image, Button, FormControl, FormLabel, Select } from '@chakra-ui/react';
import createSaleClothing from "../../../services/POST/createSaleClothing";
import createSoldClothing from "../../../services/POST/createSoldClothing";
import cloudinaryUpload from "../../../services/POST/cloudinaryUpload";
import { Clothing } from "../../../utils/types";

const Create: React.FC<{ clothingType: string }> = ({ clothingType }) => {
    
    const [showWarning, setShowWarning] = useState(false);
    // const [imageURLArray, setImageURLArray] = useState<string[]>([]);
    const [thumbnail, setThumbnail] = useState("");
    const [newClothing, setNewClothing] = useState<Clothing>({
        title: "",
        price: undefined,
        description: "",
        category: "",
        size: "",
        gender: "",
        measurements: "",
        notes: "",
        thumbnail: "",
        gallery: undefined
    });

    const stringPattern = new RegExp("^(?!\s*$).+");

    const sendImage = async (file: any, type: string) => {

        const res = await cloudinaryUpload(file.target.files?.[0]);

        if (type === "gallery") {
            // setImageURLArray([...imageURLArray, res]);
        } else if (type === "thumbnail") {
            setThumbnail(res);
        };
    };

    const validateNewClothing = (newClothing: Clothing) => {
        const clothing = {...newClothing, thumbnail: thumbnail};
        console.log("new clothing", clothing)
        console.log("thumbnail", thumbnail)
        if (
                stringPattern.test(clothing.title) &&
                stringPattern.test(clothing.description) &&
                clothing.category in categoryObj &&
                clothing.size in sizeObj &&
                clothing.gender in genderObj &&
                stringPattern.test(clothing.measurements) &&
                stringPattern.test(String(clothing.notes)) &&
                stringPattern.test(clothing.thumbnail)
                // stringPattern.test(clothing.gallery)
            ) {
                console.log("passed first regex")
                if (
                    clothingType === "sale" && 
                    stringPattern.test(String(clothing.price)) &&
                    typeof clothing.price === "number"
                ) {
                    console.log("passed sale regex")
                    createSaleClothing(clothing);
                    // setTimeout(() => {
                    //     window.location.href = `/admin/sale/view`;
                    // }, 1000);
                } else {
                    console.log("passed sold regex")
                    createSoldClothing(clothing);
                    setTimeout(() => {
                        window.location.href = `/admin/sold/view`;;
                    }, 1000);
                }
                
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        };
    };

    const categories = [
        "Clothing, Top",
        "Clothing, Bottom", 
        "Clothing, Other",
        "Accessories",
        "Other"
    ];

    const categoryObj: { [key: string]: string; } = {
        CT: "Clothing, Top",
        CB: "Clothing, Bottom", 
        CO: "Clothing, Other",
        A: "Accessories",
        O: "Other"
    };

    const sizes = [
        "Extra Extra Small",
        "Extra Small",
        "Small",
        "Medium",
        "Large",
        "Extra Large",
        "Extra Extra Large",
        "One Size"
    ];

    const sizeObj: { [key: string]: string; } = {
        XXS: "Extra Extra Small",
        XS: "Extra Small", 
        S: "Small",
        M: "Medium",
        L: "Large",
        XL: "Extra Large",
        XXL: "Extra Extra Large",
        OS: "One Size"
    };

    const genders = [
        "Male",
        "Female", 
        "Unisex"
    ];

    const genderObj: { [key: string]: string; } = {
        M: "Male",
        F: "Female", 
        U: "Unisex"
    };
    
    return (
        <div className="flex fixed bottom-0 right-0 w-[80vw] h-[80vh] flex-row">
            <div className="flex relative w-[50%] h-full pl-[5%] justify-start items-center">
                {/* <input id="UploadGallery" type="file" accept="image/*" onChange={(file) => sendImage(file, "gallery")} />
                {imageURLArray.map((image: string, index: number) => (
                    <div id='GalleryImagePreview' key={index}>
                        <Image src={image} alt="Gallery Image" />
                    </div>
                ))} */}
                <div className="flex flex-col">
                    <input id="UploadThumbnail" type="file" accept="image/*" onChange={(file) => sendImage(file, "thumbnail")} />
                    <img src={thumbnail} alt="Thumbnail Image" className="w-[80%] object-contain" />
                </div>
            </div>

            <div className="flex relative w-[50%] h-full pr-[7.5%] flex-col justify-center items-center">
                <div className="flex absolute w-full h-[90%] rounded-[25px] z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }} />
                <div className="flex relative w-full h-[80%] pr-[2%] flex-col justify-around items-start text-white overflow-y-scroll">
                    <FormControl variant="floating" isRequired>
                        <Input variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, title: e.target.value})} />
                        <FormLabel>Clothing Title</FormLabel>
                    </FormControl>
                    {clothingType === "sale" ? (
                        <FormControl variant="floating" isRequired>
                            <Input variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, price: Number(e.target.value)})} />
                            <FormLabel>Clothing Price</FormLabel>
                        </FormControl>
                    ) : (
                        <Text>No Price</Text>
                    )}
                    <FormControl variant="floating" isRequired>
                        <Input variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, description: e.target.value})} />
                        <FormLabel>Description</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" isRequired>
                        <Select defaultValue="" variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, category: e.target.value})}> 
                            <option value="" disabled></option>
                            {categories.map((category: string, index: number) => {
                                const key = Object.keys(categoryObj).find(k => categoryObj[k] === category);
                                return (
                                    <option key={index} value={key}>{category}</option>
                                )
                            })}
                        </Select>
                        <FormLabel>Category</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" isRequired>
                        <Select defaultValue="" variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, size: e.target.value})}> 
                            <option value="" disabled></option>
                            {sizes.map((size: string, index: number) => {
                                const key = Object.keys(sizeObj).find(k => sizeObj[k] === size);
                                return (
                                    <option key={index} value={key}>{size}</option>
                                )
                            })}
                        </Select>
                        <FormLabel>Size</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" isRequired>
                        <Select defaultValue="" variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, gender: e.target.value})}>
                            <option value="" disabled></option>
                            {genders.map((gender: string, index: number) => {
                                const key = Object.keys(genderObj).find(k => genderObj[k] === gender);
                                return (
                                    <option key={index} value={key}>{gender}</option>
                                )
                            })}
                        
                        </Select>
                        <FormLabel>Gender</FormLabel>
                    </FormControl>
                    <FormControl variant="floating" isRequired>
                        <Input variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, measurements: e.target.value})} />
                        <FormLabel>Measurements</FormLabel>
                    </FormControl>
                    <FormControl variant="floating">
                        <Input variant="flushed" placeholder=" " onChange={(e) => setNewClothing({...newClothing, notes: e.target.value})} />
                        <FormLabel>Notes</FormLabel>
                    </FormControl>
                    <Button onClick={() => validateNewClothing(newClothing)}>Create</Button>
                    {showWarning && 
                        <div>Tryagain blah</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Create;