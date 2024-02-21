import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function Footer() {
    
    return (
        <div id="Footer">
            <div id="FooterContainer">
                <div id="FooterPhoneContainer">
                    <Button leftIcon={<IoCall />} colorScheme="pink" variant="outline">
                        <a className="FooterLink" href="tel:202-597-6466">202-597-6466</a>
                    </Button>
                </div>
                <div id="FooterEmailContainer">
                    <Button leftIcon={<MdOutlineMail />} colorScheme="pink" variant="outline">
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to= HER EMAIL @gmail.com&su=Draft&tf=cm">HER EMAIL</a>
                    </Button>
                </div>
                <div id="FooterAddressContainer">
                    <p>Address</p>
                </div>
                <div id="FooterSocialIconContainer">
                    <a className="FooterSocialIcon" href=""><FaFacebook /></a>
                    <a className="FooterSocialIcon" href="https://www.instagram.com/genetbekele_dmv?igsh=MTlkYXB1NHRwaWllcQ%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
                    <a className="FooterSocialIcon" href="https://mail.google.com/mail/u/0/?fs=1&to= HER EMAIL @gmail.com&su=Draft&tf=cm" target="_blank"><MdOutlineMail /></a>
                </div>
            </div>
            <style>
                {`

                    #Footer {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 10vh;
                        overflow-x: hidden;
                        border-top: 1px solid black;
                    }

                    #FooterContainer {
                        display: grid;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                    }

                    #FooterEmailContainer, #FooterPhoneContainer, #FooterAddressContainer, #FooterSocialIconContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    .FooterLink {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    .FooterSocialIcon {
                        font-size: 28px;
                        margin: 0 15px;
                    }

                    @media (max-width: 600px) {
                        #Footer { height: 17vh; padding-bottom: 2vh;}
                        #FooterContainer { grid-template-columns: 1fr 1fr; }
                    }

                `}
            </style>
        </div>
    );
};