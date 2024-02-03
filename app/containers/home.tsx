import React, { useState, useEffect } from "react";
import HeroVideoThumbnail from "../../public/heroVideoThumbnail.png";

// hero section, about me description, most recent clothing, (location, hours, phone number, links)

export default function Home() {
    
    const [delay, setDelay] = useState(0);
    const [heroTop, setHeroTop] = useState(0);
    const [aboutTop, setAboutTop] = useState(0);
    const [contactTop, setContactTop] = useState(0);

    if (document) {

        const heroSection = document.getElementById("Hero");
        const aboutSection = document.getElementById("About");
        const contactSection = document.getElementById("Contact");
        
        if (!heroSection || !aboutSection || !contactSection) { return; };

        setHeroTop(heroSection.getBoundingClientRect().top);
        setAboutTop(aboutSection.getBoundingClientRect().top);
        setContactTop(contactSection.getBoundingClientRect().top);

    };

    const scrollBehavior = (sectionLocation: number) => {

        window.scrollTo({
            top: sectionLocation,
            left: 0,
            behavior: 'smooth'
        });

    };
    
    const handleSectionClick = (sectionIndex: number) => {
            
        const sectionArray = [heroTop, aboutTop, contactTop];
        scrollBehavior(sectionArray[sectionIndex]);
            
    };

    const handleSectionScroll = (event: any) => {

        if (event.wheelDelta != 0) {
            
            const currentPosition = window.scrollY;

            console.log("Top console log: ", heroTop, aboutTop, contactTop)

            const sectionArray = [heroTop, aboutTop, contactTop];
            const sectionIndex = Math.floor(currentPosition / window.innerHeight);
            console.log("section index:", sectionIndex)

            if (event.wheelDelta > 0) {

                if (sectionArray[sectionIndex - 1]) {
                    scrollBehavior(sectionArray[sectionIndex - 1]);
                };

            } else {         

                if (sectionArray[sectionIndex + 1]) {
                    scrollBehavior(sectionArray[sectionIndex + 1]);
                };

            };
        };
    };

    useEffect(() => {

        if (delay > 0) {
            setTimeout(() => {
                setDelay(delay - 1);
            }, 1000);
        };

        const checkDelay = (event: any) => {

            if (delay === 0) {
                handleSectionScroll(event);
            };

            setDelay(3);

        };

        // window.addEventListener("scroll", (event) => { event.preventDefault(); }); 
        window.addEventListener("wheel", (event) => { checkDelay(event); }); 

        return () => { 
            // window.removeEventListener("scroll", (event) => { event.preventDefault(); });
            window.removeEventListener("wheel",  (event) => { checkDelay(event); });
        };

    }, [delay, setDelay]);
    
    return (
        <div id="Home">
            <div id="HomeContainer">
                <div id="Hero">
                    <div id="HeroVideoContainer">
                        <video id="HeroVideo" muted autoPlay loop preload="true" playsInline poster={HeroVideoThumbnail}>
                            <source src="https://res.cloudinary.com/don8pmkp2/video/upload/v1706380664/mobileHero_kxrpwo.mp4" />
                        </video>
                    </div>
                    <div id="HeroTextContainer">
                        <div id="HeroTitleContainer">
                            <p id="HeroTitle">Hero Title</p>
                        </div>
                        <div id="HeroSubTitleContainer">
                            <p id="HeroSubtitle">Hero Subtitle</p>
                        </div>
                    </div>
                </div>
                <div id="About">
                    <p>This is about me.</p>
                    <div id="AboutContainer">

                    </div>
                </div>
                <div id="Contact">
                    <p>This is my contact info.</p>
                    <div id = "ContactContainer">
                        
                    </div>
                </div>
            </div>
            <style>
                {`

                    #Home {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100%;
                        overflow-x: hidden;
                    }

                    #HomeContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
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
                        justify-content: center;
                        align-items: center;
                    }

                    #HeroVideoContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border: 1px solid red;
                    }
                    
                    #HeroVideo {
                        height: 100%;
                    }

                    #HeroTextContainer {
                        display: flex;
                        position: relative;
                        width: 80%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        vertical-align: middle;
                        border: 1px solid yellow;
                    }

                    #HeroTitleContainer {
                        display: flex;
                        position: relative;
                    }

                    #HeroTitle {
                        font-size: 40px;
                        font-weight: 500;
                        width: 100%;
                        height: 100vh;
                    }

                    #HeroSubtitleContainer {
                        display: flex;
                        position: relative;
                    }

                    #HeroSubtitle {
                        font-size: 30px;
                        font-weight: 500;
                        width: 100%;
                        height: 100vh;
                    }

                    #About {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }

                    #Contact {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }

                    
                    
                `}
            </style>
        </div>
    );
};