import '../styles/globals.css'
import store from "../store";
import {Provider} from "react-redux";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";


function MyApp({Component, pageProps}) {
    let theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#e7e7ea',
            },
            secondary: {
                main: '#0001c9',
            },
            text: {
                primary: 'rgba(92,80,80,0.87)',
            },
            background: {
                default: '#ffffff',
            },
        },
    });
    return <ThemeProvider theme={theme}> <Provider store={store}><Component {...pageProps} /></Provider></ThemeProvider>
}

export default MyApp
