import React, {useState, useRef} from 'react';
import addBtn from "../images/addButton.png"

const ImgUploader = () => {
    const [image, setImage] = useState({imagePreview: ''});
    const [name, setName] = useState({namePreview: ''});
    const [time, setTime] = useState({timeHourPreview: '', timeMinutePreview: ''});

    const handleChange = (event) => {
        setImage({
            imagePreview: URL.createObjectURL(event.target.files[0])
        })
        setName({
            namePreview: "Image Name: " + event.target.files[0].name
        })
        setTime({
            timeHourPreview: "Upload Time: " + new Date().getHours() + ":",
            timeMinutePreview: new Date().getMinutes()
        })
    }

    const secDubbleDigits = (time.timeMinutePreview < 10) ? '0' : '';
    const hourDubbleDigits = (time.timeHourPreview < 10) ? '0' : '';
    const invisableTime = (image.imagePreview == "") ? "invisableTime" : "";

    return (
        <div id='imgUploader'>

            <p className="pageHeaderText">Image Uploader</p>

            <input className='addImgBtn' useRef='fileInput' type="file" onChange={handleChange}/>

            <label>
                <div className='uploadPreviewContainer'>

                    <div className='uploaderImageContainer'>
                        <img className='uploaderImage' src={image.imagePreview} alt='' />
                    </div>

                    <p className='uploaderName' id={invisableTime} >{name.namePreview}</p>

                    {/* add button here to empty imageReview array and delete the img */}

                    <div className='uploaderTime' id={invisableTime}>
                        <p className='uploaderHour'>{hourDubbleDigits + time.timeHourPreview}</p>
                        <p className='uploaderMinute'>{secDubbleDigits + time.timeMinutePreview}</p>
                    </div>

                </div>
            </label>
                               
        </div>
    )
};

export default ImgUploader;