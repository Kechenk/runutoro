import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { LanguageProvider } from "./context/language-context"
import { RouterProvider } from "react-router-dom"
import router from "./main/router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>,
)

