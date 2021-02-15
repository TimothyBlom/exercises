import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Countdown = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div class='countdown'>

            <p>Countdown Timer</p>

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