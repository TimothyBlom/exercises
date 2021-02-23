import React, {useState, useRef} from 'react';

const ImgUploader = () => {
    const [image, setImage] = useState({imagePreview: ''});
    const [name, setName] = useState({namePreview: ''});
    const [time, setTime] = useState({timeHourPreview: '', timeMinutePreview: ''});

    const handleChange = (event) => {
        setImage({
            imagePreview: URL.createObjectURL(event.target.files[0])
        })
        setName({
            namePreview: "Naam afbeelding:" + event.target.files[0].name
        })
        setTime({
            timeHourPreview: new Date().getHours(),
            timeMinutePreview: new Date().getMinutes()
        })
    }

    const secDubbleDigits = (time.timeMinutePreview < 10) ? '0' : '';
    const hourDubbleDigits = (time.timeHourPreview < 10) ? '0' : '';
    const invisableTime = (image.imagePreview == "") ? "invisableTime" : "";

    return (
        <div id='imgUploader'>

            <p className="pageHeaderText">Image Uploader</p>

            <input className='chooseFile' useRef='fileInput' type="file" onChange={handleChange}/>

            <br />

            <label>
                <div className='uploadPreviewContainer'>

                    <img className='uploaderImage' src={image.imagePreview} alt='' />
                    <h3 className='uploaderName'>{name.namePreview}</h3>
                    {/* button to empty imageReview array to delete the img */}

                    <div className='uploaderTime' id={invisableTime}>
                        <h3 className='uploaderHour'>{hourDubbleDigits + time.timeHourPreview}</h3>
                        <h3>:</h3>
                        <h3 className='uploaderMinute'>{secDubbleDigits + time.timeMinutePreview}</h3>
                    </div>

                </div>
            </label>
                               
        </div>
    )
};

export default ImgUploader;