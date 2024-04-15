import { Outlet, useLocation } from "react-router-dom";
import { Box, Button, CssBaseline } from "@mui/material";
import Header from "./Header";
import Main from "../pages/Main/Main";
import Footer from "./Footer";
import { useEffect, useReducer } from "react";
import { bgImageActions, useBgImage } from "../context/bgImageProvider";

export default function App() {
  const location = useLocation();
  const {state, dispatch} = useBgImage();

  let backgroundImage;
  useEffect(()=>{
    switch (location.pathname) {
      case "/info/1":
        backgroundImage = "url(/baku_image.jpg)";
        break;
      default:
        {
          dispatch({type: bgImageActions.change, payload:"url(/buta.svg)"});
        }
    }
  },[location.pathname])
  

  
    return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: state.bgImage,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "full",
        backgroundColor: "rgba(0,0,0,.3)",
        backgroundBlendMode: "multiply",
        gap: 5,
      }}
    >
      <CssBaseline />
      <Header />
      
      {location.pathname === "/" ? <Main /> : <Outlet />}
      <Footer />
    </Box>
  );
}
