import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter } from "react-router-dom"
import axios from "axios"

axios.defaults.baseURL = "https://api.github.com"
axios.defaults.headers.common["Authorization"] = "Bearer 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"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className={`max-w-screen-sm m-auto mt-10`}>
          <App />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
