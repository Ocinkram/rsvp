import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Index } from "./Index.jsx"
import "./main.css"
import { Amplify } from "aws-amplify"

// SAFE: prevent Vite from trying to resolve missing file at build time
let outputs

if (import.meta.env.VITE_USE_AMPLIFY === "true") {
  outputs = await import("../amplify_outputs.json")
    .then((m) => m.default)
    .catch(() => null)
} else {
  outputs = null
}

if (outputs) {
  Amplify.configure(outputs)
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index />
  </StrictMode>
)