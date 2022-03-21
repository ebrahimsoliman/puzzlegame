import React, {Fragment, useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {home, update} from "../store/modules/content/actions";
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

    return (
        <Fragment>
            <Grid container spacing={0}>
                {homeContent?.map(e =>

                    <Grid  xs={2} item key={e.attributes.content}


                        /*onClick={() => {
                              dispatch(update({
                                      ...e,
                                      front_face: !e.attributes.front_face
                                  },
                                  e.id)), ios.emit("updated")
                          }}*/>
                        <ReactCardFlip
                            isFlipped={e.attributes.front_face}
                            flipDirection="horizontal">
                            <img style={{width: '100%'}}
                                 src={'http://192.168.4.21:1339'+e.attributes.front.data.attributes.url}
                                 alt=""/>
                            <img style={{width: '100%'}}
                                 src={'http://192.168.4.21:1339'+e.attributes.back.data.attributes.url}
                                 alt=""/>
                        </ReactCardFlip>
                    </Grid>)}

            </Grid>
        </Fragment>
    );
}

export default Images;
