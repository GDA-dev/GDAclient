import React, { useState } from "react";
import { Input, Text, Image, Button, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { NavLink } from "@remix-run/react";
import updateSaleClothingByID from "../../../services/PUT/updateSaleClothingByID";
import updateSoldClothingByID from "../../../services/PUT/updateSoldClothingByID";
import cloudinaryUpload from "../../../services/POST/cloudinaryUpload";
import { IoClose } from "react-icons/io5";
import filters from "../../../utils/filters";
import { Clothing } from "../../../utils/types";

interface UpdateProps {
    clothing: Clothing;
    clothingType: string;
};

const Update: React.FC<UpdateProps> = ({ clothing, clothingType }) => {

    const { categories, categoryObj, sizes, sizeObj, genders, genderObj } = filters;
    const [showWarning, setShowWarning] = useState(false);
    // const [imageURLArray, setImageURLArray] = useState<string[]>([]);
    const [thumbnail, setThumbnail] = useState(clothing.thumbnail);
    const [updatedClothing, setUpdatedClothing] = useState<Clothing>({
        id: clothing.id,
        title: clothing.title,
        price: clothing.price,
        description: clothing.description,
        category: clothing.category,
        size: clothing.size,
        gender: clothing.gender,
        measurements: clothing.measurements,
        notes: clothing.notes,
        thumbnail: clothing.thumbnail,
        gallery: ["temp"]
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

    const validateUpdatedClothing = (updatedClothing: Clothing) => {

        const clothing = {...updatedClothing, thumbnail: thumbnail};

        if (
                stringPattern.test(clothing.title) &&
                stringPattern.test(clothing.description) &&
                clothing.category in categoryObj &&
                clothing.size in sizeObj &&
                clothing.gender in genderObj &&
                stringPattern.test(clothing.measurements) &&
                stringPattern.test(clothing.thumbnail)
                // stringPattern.test(clothing.gallery)
            ) {

                if (
                    clothingType === "sale" && 
                    stringPattern.test(String(clothing.price)) &&
                    typeof clothing.price === "number"
                ) {
                    updateSaleClothingByID(clothing, String(clothing.id));
                    setTimeout(() => {
                        window.location.href = `/admin/sale/view`;
                    }, 1000);
                } else {
                    updateSoldClothingByID(clothing, String(clothing.id));
                    setTimeout(() => {
                        window.location.href = `/admin/sold/view`;;
                    }, 1000);
                };
                
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 4000);
        };
    };

    return (
        <div className="flex fixed top-0 left-[20vw] w-[80vw] h-screen justify-center items-center backdrop-blur-[50px] z-[2]">
            <NavLink to={`/admin/${clothingType}/view`} className="flex fixed top-0 left-0 w-[65px] h-[65px] justify-end items-end text-[55px] z-[3]" unstable_viewTransition><IoClose /></NavLink>
            <div className="flex relative w-[50%] h-full pl-[5%] justify-start items-center">
                {/* <input id="UploadGallery" type="file" accept="image/*" onChange={(file) => sendImage(file, "gallery")} />
                {imageURLArray.map((image: string, index: number) => (
                    <div id='GalleryImagePreview' key={index}>
                        <Image src={image} alt="Gallery Image" />
                    </div>
                ))} */}
                <div className="flex flex-col">
                    <input id="UploadThumbnail" type="file" accept="image/*" onChange={(file) => sendImage(file, "thumbnail")} />
                    <Image src={thumbnail} alt="Thumbnail Image" className="w-[80%] object-contain" style={{ viewTransitionName: "admin-image" }} />
                </div>
            </div>

            <div className="flex relative w-[50%] h-full pr-[7.5%] flex-col justify-center items-center">
                <div className="flex absolute w-full h-[90%] rounded-[25px] z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }} />
                <div className="flex relative w-full h-[80%] pt-[5%] pr-[2%] flex-col justify-start items-start text-white">
                    <div className="flex relative w-full h-[98%] mb-[2%] pt-[2%] flex-col justify-start items-start overflow-y-scroll">
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" value={updatedClothing.title} placeholder=" " onChange={(e) => setUpdatedClothing({...updatedClothing, title: e.target.value})} />
                            <FormLabel>Clothing Title</FormLabel>
                        </FormControl>
                        {clothingType === "sale" && (
                            <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                                <Input type="number" variant="flushed" value={updatedClothing.price} placeholder=" " onChange={(e) => setUpdatedClothing({...updatedClothing, price: Number(e.target.value)})} />
                                <FormLabel>Clothing Price</FormLabel>
                            </FormControl>
                        )}
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" value={updatedClothing.description} placeholder=" " onChange={(e) => setUpdatedClothing({...updatedClothing, description: e.target.value})} />
                            <FormLabel>Description</FormLabel>
                        </FormControl>
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Select defaultValue="" variant="flushed" placeholder={categoryObj[updatedClothing.category]} onChange={(e) => setUpdatedClothing({...updatedClothing, category: e.target.value})}>
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
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Select defaultValue="" variant="flushed" placeholder={sizeObj[updatedClothing.size]} onChange={(e) => setUpdatedClothing({...updatedClothing, size: e.target.value})}>
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
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Select defaultValue="" variant="flushed" placeholder={genderObj[updatedClothing.gender]} onChange={(e) => setUpdatedClothing({...updatedClothing, gender: e.target.value})}>
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
                        <FormControl variant="floating" isRequired className="h-[60px] mb-[20px]">
                            <Input variant="flushed" value={updatedClothing.measurements} placeholder=" " onChange={(e) => setUpdatedClothing({...updatedClothing, measurements: e.target.value})} />
                            <FormLabel>Measurements</FormLabel>
                        </FormControl>
                        <FormControl variant="floating">
                            <Input variant="flushed" value={updatedClothing.notes} placeholder=" " onChange={(e) => setUpdatedClothing({...updatedClothing, notes: e.target.value})} />
                            <FormLabel>Notes</FormLabel>
                        </FormControl>
                    </div>
                    <Button onClick={() => validateUpdatedClothing(updatedClothing)}>Update</Button>
                    {showWarning && 
                        <div className="flex absolute bottom-0 right-0 items-center text-red-600 text-2xl font-semibold">Invalid Information</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Update;