import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  // ReactQueryDevtools,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contextApi/authProvider.jsx";
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
