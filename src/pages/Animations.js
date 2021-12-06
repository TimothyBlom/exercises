import React, { useState } from 'react';
import wallpaper from "../images/wallpaper1.jpg"
import logo from "../images/logo1.png"
import wallpaperUI from "../images/wallpaperUI.png"

const Animations = () => {
    const [imgIsZoomed1, setImgIsZoomed1] = useState(false);
    const [imgIsZoomed2, setImgIsZoomed2] = useState(false);
    const [imgIsZoomed3, setImgIsZoomed3] = useState(false);

    const zoomedImg1 = () => {
        setImgIsZoomed1(!imgIsZoomed1);
    };

    const zoomedImg2 = () => {
        setImgIsZoomed2(!imgIsZoomed2);
    };

    const zoomedImg3 = () => {
        setImgIsZoomed3(!imgIsZoomed3);
    };

    return (
        <div class='Animations'>

            <p className="pageHeaderText">
                Cool button animations
            </p>

            <p className="pageParaText">

                <p>Image zoom in on hover</p>
                <div className="btnWallpaperContainer" >
                    <img className="btnWallpaper" src={wallpaper} />
                </div>

                <br />

                <p>Image zoom in on click</p>
                <div className="btnWallpaperContainer" onClick={zoomedImg1}>
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed1 ? "imgZoomedIn" : "" } />
                </div>

                <br />

                <p>Image zoom in on click with logo and not working shadow, opacity doesn't seem to work on the shadow</p>
                <div className="btnWallpaperContainer" onClick={zoomedImg2}>
                    <img className="logoZoomedIn" src={logo} id={imgIsZoomed2 ? "logoZoomedOut" : "" } />
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed2 ? "imgZoomedIn" : "" } />
                </div>

                <br />

                <p>Image zoom with border</p>
                <img className="wallpaperContainerUI" src={wallpaperUI} />
                <div className="btnWallpaperContainer" onClick={zoomedImg3}>
                    <img className="logoZoomedIn" src={logo} id={imgIsZoomed3 ? "logoZoomedOut" : "" } />
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed3 ? "imgZoomedIn" : "" } />
                </div>

                <br />

            </p>

        </div>
    )
};

export default Animations;