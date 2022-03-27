import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {home} from "../store/modules/content/actions";
import ReactCardFlip from "react-card-flip";
import socketIOClient from "socket.io-client";


const ios = socketIOClient('http://192.168.4.21:1339')

function Images() {
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(home())
            ios.on('retrieve',
                e => {
                    dispatch(home())
                })
        },
        [])
    const homeContent = useSelector((state => state.contentReducer)).home.data
    const [cont, setCont] = useState([])
    useEffect(() => {
            if (homeContent) {
                setCont([homeContent.splice(0,
                    6), homeContent.splice(0,
                    6), homeContent.splice(0,
                    6), homeContent.splice(0,
                    6)])
            }
            console.log(cont)
        },
        [homeContent])
    return (
        <Box style={{

            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}><Box>
            {cont?.map((
                arr,
                index
            ) => <Grid key={index}
                       container
                       justifyContent={"center"}
            >
                {arr.map(e => <Grid item
                                    xs={2}
                                    key={e.attributes.content}>
                    <ReactCardFlip
                        isFlipped={e.attributes.front_face}
                        flipDirection="horizontal">
                        <img style={{height: 'auto', width: '100%', maxHeight: '24vh'}}
                             src={'https://flipbk.inteligencia.co.uk' + e.attributes.front.data.attributes.url}
                             alt=""/>
                        <img style={{height: 'auto', width: '100%', maxHeight: '24vh'}}
                             src={'https://flipbk.inteligencia.co.uk' + e.attributes.back.data.attributes.url}
                             alt=""/>
                    </ReactCardFlip>
                </Grid>)}
            </Grid>)}

        </Box></Box>
    );
}

export default Images;
