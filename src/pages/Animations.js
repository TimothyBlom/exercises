import React, { useState } from 'react';
import wallpaper from "../images/wallpaper1.jpg"
import logo from "../images/logo1.png"
import wallpaperUI from "../images/wallpaperUI.png"
import wallpaperVerticalUI from "../images/wallpaperVerticalUI.png"
import wallpaperHorizontalUI from "../images/wallpaperHorizontalUI.png"

const Animations = () => {
    const [imgIsZoomed1, setImgIsZoomed1] = useState(false);
    const [imgIsZoomed2, setImgIsZoomed2] = useState(false);
    const [imgIsZoomed3, setImgIsZoomed3] = useState(false);
    const [imgIsZoomed4, setImgIsZoomed4] = useState(false);
    const [imgIsZoomed5, setImgIsZoomed5] = useState(false);

    const zoomedImg5 = () => {
        setImgIsZoomed5(!imgIsZoomed5);
    };

    const zoomedImg1 = () => {
        setImgIsZoomed1(!imgIsZoomed1);
    };

    const zoomedImg2 = () => {
        setImgIsZoomed2(!imgIsZoomed2);
    };

    const zoomedImg3 = () => {
        setImgIsZoomed3(!imgIsZoomed3);
    };

    const zoomedImg4 = () => {
        setImgIsZoomed4(!imgIsZoomed4);
    };

    return (
        <div class='Animations'>

            <p className="pageHeaderText">
                Cool button animations
            </p>

            <div className="pageParaText">

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

                <p>Image zoom with moving borders</p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div>
                    <img className="wallpaperTopUI" src={wallpaperHorizontalUI} id={imgIsZoomed4 ? "wallpaperTopOut" : "" } />
                    <img className="wallpaperBottomUI" src={wallpaperHorizontalUI} id={imgIsZoomed4 ? "wallpaperBottomOut" : "" } />
                    <img className="wallpaperRightUI" src={wallpaperVerticalUI} id={imgIsZoomed4 ? "wallpaperRightOut" : "" } />
                    <img className="wallpaperLeftUI" src={wallpaperVerticalUI} id={imgIsZoomed4 ? "wallpaperLeftOut" : "" } />
                    <img className="wallpaperContainerUI" src={wallpaperUI} />
                    <div className="btnWallpaperContainer" onClick={zoomedImg4}>
                        <img className="logoZoomedIn" src={logo} id={imgIsZoomed4 ? "logoZoomedOut" : "" } />
                        <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed4 ? "imgZoomedIn" : "" } />
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <p>Image zoom with delayed moving borders</p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                <div>
                    <img className="wallpaperTopUI2" src={wallpaperHorizontalUI} id={imgIsZoomed5 ? "wallpaperTopOut" : "" } />
                    <img className="wallpaperBottomUI2" src={wallpaperHorizontalUI} id={imgIsZoomed5 ? "wallpaperBottomOut" : "" } />
                    <img className="wallpaperRightUI" src={wallpaperVerticalUI} id={imgIsZoomed5 ? "wallpaperRightOut" : "" } />
                    <img className="wallpaperLeftUI" src={wallpaperVerticalUI} id={imgIsZoomed5 ? "wallpaperLeftOut" : "" } />
                    <img className="wallpaperContainerUI" src={wallpaperUI} />
                    <div className="btnWallpaperContainer" onClick={zoomedImg5}>
                        <img className="logoZoomedIn" src={logo} id={imgIsZoomed5 ? "logoZoomedOut" : "" } />
                        <img className="imgZoomedOut" src={wallpaper} id={imgIsZoomed5 ? "imgZoomedIn" : "" } />
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>
    )
};

export default Animations;