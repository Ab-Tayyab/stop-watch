import { Button, Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import img from './img.jpg'
import Clock from './Clock'

const Timer = () => {

    const divStyle = {
        width: '500px',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover'
    };

    const [time, setTime] = useState({s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    var updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        updatedS++;
        return setTime({ s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    const resume = () => start();

    return (
        <Box sx={{
            width: "100%",
            height: "500px",
            pt:"200px"
        }}>
            <Box style={divStyle} sx={{
                margin: "auto",
                color: "#C3F8FF",
                padding: "20px 10px 20px 10px",
                border: "2px solid white",
            }}>
                <Box>
                    <Clock />
                </Box>
                <Typography variant='h4' sx={{
                    textAlign: "center",
                    mt: "10px",
                    mb: "10px"
                }}>Stop Watch</Typography>
                <Box sx={{
                    display: "flex",
                    mb: "20px",
                    justifyContent: "center",
                }}>
                    <Typography variant="h3">
                        {(time.h) > 9 ? time.h : "0" + time.h}:
                    </Typography>
                    <Typography variant="h3">
                        {(time.m > 9) ? time.m : "0" + time.m}:
                    </Typography>
                    <Typography variant="h3">
                        {(time.s > 9) ? time.s : "0" + time.s}
                    </Typography>
                </Box>
                <Box sx={{
                    padding: "0px 25px 0px 25px",
                }}>
                    {(status === 0) ?
                        <Button variant="contained"
                            onClick={start}>Start</Button> : ""
                    }
                    {(status === 1) ?
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <Button variant="contained"
                                onClick={stop}>Stop</Button>
                            <Button variant="contained"
                                onClick={reset}>Reset</Button>
                        </Box> : ""
                    }
                    {(status === 2) ?
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <Button variant="contained"
                                onClick={resume}>Resume</Button>
                            <Button variant="contained"
                                onClick={reset}>Reset</Button>
                        </Box> : ""
                    }
                </Box>
            </Box>
        </Box >
    )
}
export default Timer