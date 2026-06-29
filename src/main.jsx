import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Index } from './Index.jsx'
import './main.css'
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
