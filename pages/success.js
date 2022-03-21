import React, {Fragment} from 'react';
import {Grid, Typography} from "@mui/material";


function Success() {
    return (
        <Fragment><Grid justifyContent={"center"}
                        alignContent={"center"}
                        style={{height: '100vh'}}
                        container><Grid xs={12}>
            <Typography variant={'h1'}
                        textAlign={'center'}>thank you </Typography></Grid> </Grid>
        </Fragment>
    );
}

export default Success;
