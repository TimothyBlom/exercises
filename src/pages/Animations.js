import React, { useState } from 'react';
import wallpaper from "../images/wallpaper1.jpg"
import logo from "../images/logo1.png"

const Animations = () => {
    const [imgIsZoomed, setImgIsZoomed] = useState(false);

    const zoomedImg = () => {
        setImgIsZoomed(!imgIsZoomed);
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
                <div className="btnWallpaperContainer" onClick={zoomedImg}>
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed ? "imgZoomedIn" : "" } />
                </div>

                <br />

                <p>Image zoom in on click with logo and not working shadow, opacity doesn't seem to work on the shadow</p>
                <div className="btnWallpaperContainer" onClick={zoomedImg}>
                    <img className="logoZoomedIn" src={logo} id={imgIsZoomed ? "logoZoomedOut" : "" } />
                    <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed ? "imgZoomedIn" : "" } />
                </div>

            </p>

        </div>
    )
};

export default Animations;