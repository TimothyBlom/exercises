import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import CountdownComponent from "../components/CountdownComponent";

const Countdown = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div class='countdown'>

            <p className="pageHeaderText">
                Countdown timers to specific dates, and an date picker without a function.
            </p>

            <CountdownComponent 
                timerDate={"June 11, 2022"}
                timerDescription={"The release date for the video game Ratchet & Clank Rift Apart"}
            />

            <CountdownComponent 
                timerDate={"May 14, 2022"}
                timerDescription={"The release date for the video game Mass Effect Legendary Edition"}
            />

            <div className="datePickerContainer">
                <p>Date Picker Component</p>
                <DatePicker 
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} 
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    scrollableMonthYearDropdown
                    isClearable
                />
            </div>

        </div>
    )
};

export default Countdown;