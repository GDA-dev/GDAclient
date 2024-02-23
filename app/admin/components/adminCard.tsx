import React, { useState } from "react";
import { NavLink, unstable_useViewTransitionState, useLocation } from '@remix-run/react';
import { Card, CardBody, Image, Stack, Heading, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { Clothing } from "../../../utils/types";
import DeleteModal from "../containers/deleteModal";

interface AdminCardProps {
    clothing: Clothing;
};

const AdminCard: React.FC<AdminCardProps> = ({ clothing }) => {
    
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const isTransitioning = unstable_useViewTransitionState(`update/${clothing.id}`);
    const clothingType = clothing.price ? "sale" : "sold";
    const location = useLocation();

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setTimeout(() => {
            setShowDeleteModal(false);
        }, 100);
    };

    return (
        <Card className="flex h-full items-start">
            <CardBody>
                <Image
                    src={clothing.thumbnail}
                    alt='Clothing Card Thumbnail'
                    className="rounded-[5px]"
                    style={ isTransitioning && (location.pathname === "/admin/sale/view" || location.pathname === "/admin/sold/view") ? { viewTransitionName: "admin-image" } : undefined }
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{clothing.title}</Heading>
                    {clothing.price ? (
                        <Text fontSize='lg'>${clothing.price}</Text>
                    ) : (
                        <Text fontSize='lg'>Sold Out</Text>
                    )}
                </Stack>
            </CardBody>
            <ButtonGroup className="flex flex-row">
                <Button variant='ghost' colorScheme="blue" className="ml-[10px] mb-[10px]">
                    <NavLink to={`/admin/${clothingType}/view/update/${clothing.id}`} unstable_viewTransition>Update</NavLink>
                </Button>
                <Button variant='ghost' colorScheme="red" className="mr-[10px] mb-[10px]" onClick={openDeleteModal}>Delete</Button>
                {showDeleteModal && <DeleteModal clothingType={clothingType} clothingID={String(clothing.id)} showModal={true} closeModal={closeDeleteModal} />}
            </ButtonGroup>
        </Card>
    );
};

export default AdminCard;