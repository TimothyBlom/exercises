import React, { useState, useRef, useEffect } from 'react';

const CountdownComponent = (props) => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date(props.timerDate).getTime();

        interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeUntil = countdownDate - currentTime;
            const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
            const hours = Math.floor(timeUntil % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(timeUntil % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(timeUntil % (1000 * 60) / 1000);

            if (timeUntil < 0) {
                clearInterval(interval.current);

            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="timerContainer">

            <div className="timerDescription">
                <p>
                    {props.timerDescription}
                </p>
                <p>
                    {props.timerDate}
                </p>
            </div>

            <div className="time">
                <p className="timeNumber">{timerDays}</p>
                <p className="timename">Days</p>
                <p className="timeDots">:</p>
            </div>

            <div className="time">
                <p className="timeNumber">{timerHours}</p>
                <p className="timename">Hours</p>
                <p className="timeDots">:</p>
            </div>

            <div className="time">
                <p className="timeNumber">{timerMinutes}</p>
                <p className="timename">Minutes</p>
                <p className="timeDots">:</p>
            </div>

            <div className="time">
                <p className="timeNumber">{timerSeconds}</p>
                <p className="timename">Seconds</p>
            </div>

        </div>
    )
};

export default CountdownComponent;