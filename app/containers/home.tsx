import React, { useState, useEffect } from "react";
import HeroVideoThumbnail from "../../public/heroVideoThumbnail.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {

    const [initialLoad, setInitialLoad] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const [selectedSection, setSelectedSection] = useState(0);
    const [sectionArray, setSectionArray] = useState<number[]>([]);

    const handleIntialLoad = () => {

        document.body.style.overflow = 'hidden';
        if (!initialLoad) {
            setSectionArray([0, window.innerHeight, window.innerHeight * 2]);
        };
        setInitialLoad(true);

    };

    const scrollEffect = (sectionLocation: number) => {

        window.scrollTo({
            top: sectionLocation,
            left: 0,
            behavior: 'smooth'
        });

    };
    
    const handleSectionClick = (sectionIndex: number) => {
        
        setSelectedSection(sectionIndex);
        scrollEffect(sectionArray[sectionIndex]);
            
    };

    const handleSectionScroll = (event: any) => {

        if (event.deltaY != 0) {

            const positionFraction = window.scrollY / window.innerHeight;
            // edge case where user scrolls up on index 1 section and should go to 0 but it stays at 1 because positionFraction is 1.0000...1
            const roundDownCase = positionFraction <= 1.1 && positionFraction >= 1 && event.deltaY < 0 ? true : false;
            const sectionIndex = roundDownCase ? 0 : Math.floor(positionFraction);
            setSelectedSection(sectionIndex);

            if (event.deltaY < 0) {

                if (sectionArray[sectionIndex - 1]) {
                    setLastScroll(Date.now());
                    scrollEffect(sectionArray[sectionIndex - 1]);
                } else if (sectionIndex === 0) {
                    scrollEffect(sectionArray[0]);
                };

            } else {         

                if (sectionArray[sectionIndex + 1]) {
                    setLastScroll(Date.now());
                    scrollEffect(sectionArray[sectionIndex + 1]);
                };

            };
        };

    };

    useEffect(() => {
        
        handleIntialLoad();

        window.addEventListener("wheel", (event) => {

            event.preventDefault();

            // console.log(`${Date.now()} - ${lastScroll} > 1000`, Date.now() - lastScroll > 1000)
            
            if (Date.now() - lastScroll > 1000) {
                setScrollCount(scrollCount + 1);
                if (scrollCount === 1) {
                    handleSectionScroll(event);
                    setTimeout(() => { setScrollCount(0); }, 1000);
                };
            };

        }, { passive: false });

        return () => {
            window.removeEventListener("wheel", (event) => { handleSectionScroll(event); });
        };

    }, [initialLoad, setInitialLoad, sectionArray, setSectionArray, lastScroll, setLastScroll, scrollCount, setScrollCount]);
    
    return (
        <div id="Home">
            <div id="HomeContainer">
                <div id="Hero">
                    <div id="HeroVideoContainer">
                        <video id="HeroVideo" muted autoPlay loop preload="true" playsInline poster={HeroVideoThumbnail}>
                            {/* <source src="https://res.cloudinary.com/don8pmkp2/video/upload/v1706380664/mobileHero_kxrpwo.mp4" /> */}
                        </video>
                    </div>
                    <div id="HeroTextContainer">
                        <div id="HeroTitleContainer">
                            <p id="HeroTitle">Genet's Designs and Alterations</p>
                        </div>
                        <div id="HeroSubtitleContainer">
                            <p id="HeroSubtitle">View clothes and call for custom orders!</p>
                        </div>
                    </div>
                </div>
                <div id="About">
                    <div id="AboutTextContainer">
                        <div id="AboutTitleContainer">
                            <p id="AboutTitle">About Genet's Designs</p>
                        </div>
                        <div id="AboutParagraphContainer">
                            <p id="AboutParagraph">We sell Ethiopian Traditional attires of all forms. If you’d like to custom make your very own Habesha Kemis, you’ve come to the right place! The amazing design and immaculate stitching of our hand tailored outfits will take your breath. If you’d like anything tailored to fit just right, give us a call!</p>
                        </div>
                    </div>
                    <div id="AboutHeaderImageContainer">
                        <img id="AboutHeaderImage" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="Genet Design's About Image" />
                    </div>
                </div>
                <div id="Contact">
                    <div id="ContactHeaderContainer">
                        <p id="ContactHeader">Contact Me</p>
                    </div>
                    <div id="ContactInformationContainer">
                        <div id="ContactLocationContainer">
                            <div id="ContactLocationImageContainer">
                                <img id="ContactLocationImage" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="Genet Design's Store Front" />
                            </div>
                            <div id="ContactLocationAddressContainer">
                                <p id="ContactLocationAddress">Placeholder</p>
                            </div>
                        </div>
                        <div id="ContactInfoContainer">
                            <div id="ContactInfoHoursContainer">
                                <p id="ContactInfoHours">Open times: 9:00am - 5:00pm</p>
                            </div>
                            <div id="ContactInfoPhoneContainer">
                                <p id="ContactInfoPhone">Phone number: 123-456-7890</p>
                            </div>
                            <div id="ContactInfoLinksContainer">
                                <div id="ContactInfoLinks">
                                    <a href=""><FaFacebook /></a>
                                    <a href="https://www.instagram.com/genetbekele_dmv?igsh=MTlkYXB1NHRwaWllcQ%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
                                    <a href="https://mail.google.com/mail/u/0/?fs=1&to= HER EMAIL @gmail.com&su=Draft&tf=cm" target="_blank"><MdEmail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="SideSectionSelection">
                <div id="SideSectionSelectionContainer">
                    <div id="SideSectionSelectionOption" className={ selectedSection === 0 ? "selected" : "" } onClick={() => { handleSectionClick(0) }}></div>
                    <div id="SideSectionSelectionOption" className={ selectedSection === 1 ? "selected" : "" } onClick={() => { handleSectionClick(1) }}></div>
                    <div id="SideSectionSelectionOption" className={ selectedSection === 2 ? "selected" : "" } onClick={() => { handleSectionClick(2) }}></div>
                </div>
            </div>
            <style>
                {`

                    #Home {
                        display: flex;
                        position: relative;
                        width: 99.5vw;
                        height: 100%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                    }

                    #HomeContainer {
                        display: flex;
                        position: relative;
                        width: 94%;
                        height: 100%;
                        margin: 0 6%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #Hero {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        padding-top: 10vh;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #HeroVideoContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    #HeroVideo {
                        height: 100%;
                    }

                    #HeroTextContainer {
                        display: flex;
                        position: relative;
                        width: 60%;
                        height: 80%;
                        padding: 0 5%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 45px;
                        background-color: rgba(0, 0, 0, 0.75);
                    }

                    #HeroTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    #HeroTitle {
                        font-size: 60px;
                        font-weight: 600;
                        color: white;
                    }

                    #HeroSubtitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        padding-top: 5%;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    #HeroSubtitle {
                        font-size: 30px;
                        color: white;
                    }

                    #About {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        padding-top: 10vh;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutTextContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutTitle {
                        font-size: 50px;
                        font-weight: 600;
                    }

                    #AboutParagraphContainer {
                        display: flex;
                        position: relative;
                        width: 85%;
                        height: 70%;
                        justify-content: flex-start;
                        align-items: flex-start;
                    }

                    #AboutParagraph {
                        font-size: 24px;
                    }

                    #AboutHeaderImageContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutHeaderImage {
                        height: 70%;
                    }

                    #Contact {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        padding-top: 10vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactHeader {
                        font-size: 50px;
                        font-weight: 600;
                    }

                    #ContactInformationContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 75%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactLocationContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactLocationImageContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 60%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactLocationImage {
                        height: 100%;
                    }

                    #ContactLocationAddressContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 40%;
                        align-items: center;
                        justify-content: center;
                    }

                    #ContactLocationAddress {
                        font-size: 24px;
                    }

                    #ContactInfoContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    
                    #ContactInfoHoursContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactInfoHours {
                        font-size: 24px;
                    }

                    #ContactInfoPhoneContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactInfoPhone {
                        font-size: 24px;
                    }

                    #ContactInfoLinksContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactInfoLinks {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        font-size: 50px;
                    }

                    #SideSectionSelection {
                        display: flex;
                        position: fixed;
                        top: 10vh;
                        right: 0;
                        width: 3%;
                        height: 90%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #SideSectionSelectionContainer {
                        display: flex;
                        width: 95%;
                        height: 30%;
                        margin-right: 5%;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.75);
                        border-radius: 25px;
                    }

                    #SideSectionSelectionOption {
                        display: flex;
                        position: relative;
                        width: 45%;
                        height: 10%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid white;
                        border-radius: 50%;
                        cursor: pointer;
                    }

                    #SideSectionSelectionOption:hover {
                        opacity: 0.7;
                    }

                    #SideSectionSelectionOption.selected {
                        background-color: white;
                        transition: background-color 0.5s ease-in-out;
                    }
                    
                `}
            </style>
        </div>
    );
};