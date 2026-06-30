import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Index } from "./Index.jsx"
import "./main.css"
import { Amplify } from "aws-amplify"

// Try to load Amplify config safely (won't crash if missing in production)
let outputs = null

try {
  outputs = (await import("../amplify_outputs.json")).default
} catch (err) {
  outputs = null
}

// Only configure Amplify if outputs exist
if (outputs) {
  Amplify.configure(outputs)
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index />
  </StrictMode>
)