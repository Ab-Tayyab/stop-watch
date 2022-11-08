import { Typography, Box } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 })
    const [day, setDay] = useState({ y: 0, m: 0, d: 0 })

    useEffect(() => {
        setInterval(() => {
            let time = new Date()
            let second = time.getSeconds()
            let minute = time.getMinutes()
            let hour = time.getHours()
            setTime({ s: second, m: minute, h: hour })

            let date = time.getDate();
            let month = time.getMonth();
            let year = time.getFullYear();
            setDay({ y: year, m: month, d: date })
        }, 1000);
    }, [])
    return (
        <div>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 25px 0px 25px"

            }}>
                <Box>
                    <Typography sx={{
                        textAlign: "center",
                        mb: "10px",
                    }}>Date</Typography>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <Typography>{(day.d) > 9 ? day.d : "0" + day.d}:</Typography>
                        <Typography>{(day.m) > 9 ? day.m : "0" + day.m}:</Typography>
                        <Typography>{day.y}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{
                        mb: "10px",
                        textAlign: "center",
                    }}>Time</Typography>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <Typography>{(time.h) > 9 ? time.h : "0" + time.h}:</Typography>
                        <Typography>{(time.m) > 9 ? time.m : "0" + time.m}:</Typography>
                        <Typography>{(time.s) > 9 ? time.s : "0" + time.s}</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Clock