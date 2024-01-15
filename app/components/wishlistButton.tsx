import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface WishlistButtonProps {
    openWishlist: () => void;
};

const WishlistButton: React.FC<WishlistButtonProps> = ({ openWishlist }) => {
    
    const [showWishlist, setShowWishlist] = useState(false);

    const handleWishlistView = () => {
        setShowWishlist(true);
    };
    
    return (
        <>
            <FaHeart style={{ color: "red" }}/>
        </>
    );
};

export default WishlistButton;