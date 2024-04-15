import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Providers from "./app/context";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "Arial", "sans-serif"].join(","),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>

  <ThemeProvider theme={theme}>
  <Providers>
    <RouterProvider router={router} />
  </Providers>
  </ThemeProvider>
  </>
);
