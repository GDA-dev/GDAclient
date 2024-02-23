import React, { useState } from "react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from '@chakra-ui/react'
import deleteSaleClothingByID from "../../../services/DELETE/deleteSaleClothingByID";
import deleteSoldClothingByID from "../../../services/DELETE/deleteSoldClothingByID";

interface DeleteModalProps {
    clothingType: string;
    clothingID: string;
    showModal: boolean;
    closeModal: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ clothingType, clothingID, showModal, closeModal }) => {

    const [showDeleteModal, setShowDeleteModal] = useState(showModal);
    const [deleting, setDeleting] = useState(false);

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
        closeModal();
    };

    const deleteClothing = () => {

        if (clothingType === "sale") {
            setDeleting(true);
            deleteSaleClothingByID(clothingID);
        } else if (clothingType === "sold") {
            setDeleting(true);
            deleteSoldClothingByID(clothingID);
        };

        setTimeout(() => {
            window.location.href = `/admin/${clothingType}/view`;
        }, 1000);
    };

    return (
        <Modal isOpen={showDeleteModal} onClose={closeDeleteModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Confirmation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Are you sure you want to delete this item?</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={closeDeleteModal}>Cancel</Button>
                    <Button colorScheme="red" isLoading={deleting} onClick={deleteClothing}>Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteModal;