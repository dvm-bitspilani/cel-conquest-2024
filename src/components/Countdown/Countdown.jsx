import { useEffect, useState } from 'react';

export default function Countdown({ dateString, ...args }) {
    const conquest = new Date(dateString).getTime();

    const [curr, setCurr] = useState(new Date().getTime());

    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        if (conquest > curr) {
            setInterval(() => {
                setCurr(new Date().getTime());
            }, 1000)
        }
    }, [conquest])

    useEffect(() => {
        if (conquest > curr) {
            const days = Math.floor((conquest - curr) / (1000 * 60 * 60 * 24));
            const hours = Math.floor(((conquest - curr) / (1000 * 60 * 60)) - (days * 24))
            const minutes = Math.floor(((conquest - curr) / (1000 * 60)) - ((hours * 60) + (days * 24 * 60)))
            const seconds = Math.floor(((conquest - curr) / (1000)) - ((minutes * 60) + (hours * 60 * 60) + (days * 24 * 60 * 60)))
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            })
        }
        else {
            setTimeLeft({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            })

        }
    }, [curr])

    return (
        <p {...args}>{timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S</p>
    )
}