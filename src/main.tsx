import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import GlobalStyle from "./GlobalStyles.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
