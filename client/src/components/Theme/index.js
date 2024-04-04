import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const theme = createTheme({
    palette: {
      primary: {main:'#93B9E8'},
      secondary: {main:'#2C228C'},
    },
  });

export const ThemedButton = ({props, text, color}) => {
    return (
        <ThemeProvider theme={theme}>
            <Button {...props} color={color} >
                {text}
            </Button>
        </ThemeProvider>
    );
};
