import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Index } from './Index.jsx'
import './main.css'
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import theme from './theme'
import '@fontsource/great-vibes';
import '@fontsource/cormorant-garamond';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  </BrowserRouter>
  ,
)
