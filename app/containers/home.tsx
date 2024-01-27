import React from "react";
import HeroVideoThumbnail from "../../public/heroVideoThumbnail.png";

// hero section, about me description, most recent clothing, (location, hours, phone number, links)

export default function Home() {
    
    
    
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

                        </div>
                        <div id="HeroSubTitleContainer">

                        </div>
                    </div>
                </div>
                <div id="About">

                </div>
                <div id="Contact">

                </div>
            </div>
            <style>
                {`

                    #Home {
                        
                    }

                    #HomeContainer {

                    }


                    #Hero {

                    }

                    #HeroVideoContainer {

                    }
                    
                    #HeroVideo {
                        height: 40px;
                    }
                    
                `}
            </style>
        </div>
    );
};