import {HOME, QUESTION, SET_ERROR} from "./types";
import ContentService from '../../../../services/contentService'
import socketIOClient from "socket.io-client";


const ios = socketIOClient('http://192.168.4.21:1339')

export const home = () => async (dispatch) => {
    try {
        const res = await ContentService.home();
        dispatch({
            type: HOME,
            payload: res.data
        });

    } catch (e) {

    }
}
export const update = (
    data,
    id
) => async (dispatch) => {
    try {
        await ContentService.update(data,
            id);
        dispatch(home())

    } catch (e) {

    }
}

export const answer = (
    data,
    id
) => async (dispatch) => {
    try {
        await ContentService.answer(data,
            id);
        dispatch(home())
        dispatch({
                type: SET_ERROR,
                payload: {
                    error: {message: '', isError: false},
                }
            }
        );
        ios.emit("updated")
    } catch (e) {
        dispatch({
                type: SET_ERROR,
                payload: {
                    error: {message: 'Incorrect Answer', isError: true},
                }
            }
        )
    }
}

export const question = (
    id
) => async (dispatch) => {
    try {
       let res =  await ContentService.question(id);
        dispatch({
            type: QUESTION,
            payload: res.data
        });

    } catch (e) {

    }
}


