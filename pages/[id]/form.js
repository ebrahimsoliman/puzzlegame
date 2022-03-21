import React, {useEffect} from 'react';
import {Box, Button, Container, FormHelperText, Grid, InputLabel, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {answer, question} from "../../store/modules/content/actions";


function Form() {
    const {register, handleSubmit, watch, formState: {errors}, getValues, reset, setValue, control} = useForm()
    const dispatch = useDispatch()
    const router = useRouter()
    let campid = router.query.id

    const error = useSelector((state => state.contentReducer)).error
    const questions = useSelector((state => state.contentReducer)).question.data?.attributes.question

    useEffect(() => {
            if (error.isError === false) {
                router.push('/success')
            }
        },
        [error.isError])
    useEffect(() => {
            if (campid) {
                dispatch(question(campid))
            }
        },
        [campid])
    const submit = () => {
        let data = {
            answer: watch().answer,
        }
        dispatch(answer(data,
            router.query.id))
    }
    return (
        <Container maxWidth={'sm'}
                   sx={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
            <Box sx={{
                pt: 0,
                pl: 3,
                pr: 3,
                pb: 3,
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
            }}>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container
                          justifyContent={'center'}>
                        <Grid item
                              md={8}>
                            <img style={{width: '100%', margin: '30px 0'}}
                                 src={'/logo.png'}
                                 alt=""/></Grid>
                    </Grid>
                    <Grid item
                          md={12}><Typography variant={'h4'}
                                              textAlign={'center'}>{questions}</Typography></Grid>
                    <InputLabel sx={{color: 'black', mb: 1}}>Answer</InputLabel>
                    <TextField size="small"
                               fullWidth {...register("answer",
                        {
                            required: 'This field is required',
                            // valueAsNumber: true,
                        })}
                               error={errors.answer}
                               helperText={errors.answer && errors.answer?.message}
                               sx={{mb: 3}}/>
                    <Button variant="contained"
                            color='secondary'
                            type={'submit'}
                            sx={{textTransform: 'capitalize'}}>Answer</Button>

                    <FormHelperText sx={{
                        ml: '14px',
                        mt: '20px',
                        color: '#d32f2f',
                        textAlign: 'center'
                    }}>{error.message}</FormHelperText>

                </form>
            </Box>
        </Container>

    );
}

export default Form;
