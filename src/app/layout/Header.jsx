import { MapOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import { useState } from "react";

export default function DrawerAppBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveMenuItem(item);
  };

  const handleMouseLeave = () => {
    setActiveMenuItem(null);
  };

  const handleMenuMouseEnter = () => {
    setActiveMenuItem(activeMenuItem);
  };

  return (
    <Box sx={{ display: "flex", mb: 15 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ opacity: "90%", backgroundColor: "black" }}>
        <Toolbar sx={{ mr: 3, ml: 3 }}>
          <Box
            display="flex"
            justifyContent="left"
            alignItems="center"
            gap={2}
            variant="h2"
            component={Link}
            to="/"
            fontWeight="700"
            flexGrow={1}
          >
            <svg
              width="47"
              height="64"
              viewBox="0 0 47 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.4507 53.9907C43.0845 53.0612 43.6498 52.0815 44.1431 51.0588L35.476 41.4485C35.2564 41.2009 34.9611 41.0573 34.655 41.0179C34.2878 40.9676 33.9025 41.0681 33.6 41.3265L30.9786 43.5765V43.5801L30.3593 44.1112L21.8074 33.6576C21.2817 33.0117 20.2951 32.9973 19.7478 33.6253L3.54785 52.322C7.4547 59.2875 14.9299 63.9957 23.5142 63.9957C30.3665 63.9957 36.5167 60.9921 40.708 56.23L34.6226 49.5372L36.7435 47.5958L42.4507 53.9907ZM21.6706 61.01L7.71036 52.6808L12.5426 47.2764L23.3378 56.9908L15.1568 54.1055L21.6706 61.01ZM29.8192 57.7049L15.1424 44.1471L19.8018 38.8432C20.3563 38.2116 21.3537 38.2403 21.8723 38.9006L33.4056 53.6498L23.633 47.2262L29.8192 57.7049Z"
                fill="#F6F6F6"
              />
              <path
                d="M46.3827 41.2081C46.3827 43.8314 45.9398 46.3506 45.1188 48.6975L37.1935 39.9126C36.8694 39.5538 36.4806 39.2667 36.0557 39.0657C41.2732 30.2808 36.2321 17.5986 36.1277 17.3367C36.2897 17.5161 43.1708 25.2675 45.5725 35.1792C46.1019 37.0956 46.3827 39.1195 46.3827 41.2081Z"
                fill="white"
              />
              <path
                d="M22.0378 21.9838C18.6386 26.3225 16.8058 29.6706 15.8264 32.1037C15.1567 33.7616 14.883 34.9961 14.7822 35.8323L2.4459 50.0755C1.28645 47.3517 0.645508 44.3516 0.645508 41.208C0.645508 37.1636 1.70414 33.3633 3.55854 30.0726C3.68457 32.4446 4.16348 35.6959 5.72262 38.0716C5.72262 38.0716 4.30751 31.4039 8.58884 23.9396C9.67988 22.0377 11.1418 20.089 13.0898 18.1835C16.8166 14.5267 19.2184 11.5051 20.7019 8.96435C23.0316 4.98458 23.1144 2.18905 22.5923 0C22.5923 0 22.5923 0 22.5959 0.00358861C22.7471 0.23326 30.1756 11.5948 22.0378 21.9838Z"
                fill="white"
              />
              <path
                d="M36.0554 39.0621C35.5657 38.8288 35.0291 38.7032 34.4746 38.7032C33.5996 38.7032 32.757 39.0154 32.0909 39.5824L31.6948 39.9234L30.6506 40.8205L23.6002 32.2043C22.9053 31.3502 21.8683 30.8585 20.7628 30.8585C19.7006 30.8585 18.6888 31.3179 17.9974 32.1217L15.124 35.4376L14.7783 35.8359C14.8827 34.9998 15.1528 33.7653 15.8225 32.1074C16.802 29.6743 18.6348 26.3261 22.0339 21.9875C30.1717 11.5949 22.7397 0.236922 22.5884 0.00366211C22.8117 0.132852 33.4376 6.33038 32.4798 20.2362C32.3322 22.3571 31.9181 24.6574 31.1547 27.1443C31.1547 27.1443 33.5456 25.2459 35.0508 21.5246C35.2704 20.9755 35.4756 20.3834 35.6449 19.759L35.6521 19.7374C35.8645 18.9874 36.023 18.1872 36.1238 17.3259C36.1238 17.3259 36.1238 17.3295 36.1274 17.3295C36.2318 17.5914 41.2729 30.2772 36.0554 39.0621Z"
                fill="white"
              />
              <path
                d="M36.124 17.3257C36.0196 18.1834 35.8612 18.9836 35.6523 19.7372L36.124 17.3257Z"
                fill="white"
              />
            </svg>
            <svg
              width="219"
              height="33"
              viewBox="0 0 219 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.526367 1.21362H6.08406V27.5032H15.6643V32.3102H0.526367V1.21362Z"
                fill="white"
              />
              <path
                d="M25.2223 1.21362H30.5217V7.24536H28.6617L23.558 32.3065H17.8711L25.2223 1.21362ZM23.1889 20.9529H34.2157L35.19 25.3259H22.2368L23.1889 20.9529ZM28.7466 7.24536V1.21362H32.186L39.5373 32.3102H33.8504L28.7466 7.24536Z"
                fill="white"
              />
              <path
                d="M42.9287 1.21362H48.8112L59.3841 27.1832L55.7527 22.3357H57.6127L57.5684 1.2173H62.543V32.3139H56.7492L46.0877 6.36267L49.719 11.2101H47.8591L47.9033 32.3065H42.9287V1.21362Z"
                fill="white"
              />
              <path
                d="M67.2334 1.21362H75.3005C77.8949 1.21362 80.0833 1.77266 81.862 2.89442C83.6408 4.01618 84.9915 5.71904 85.9067 8.00301C86.8219 10.287 87.2795 13.1741 87.2795 16.6644V16.7086C87.2795 20.1842 86.8219 23.0787 85.9067 25.3921C84.9915 27.7055 83.6482 29.4378 81.8731 30.5853C80.1017 31.7364 77.9096 32.3102 75.3005 32.3102H67.2334V1.21362ZM74.7359 27.5032C76.2637 27.5032 77.5406 27.1428 78.5628 26.4256C79.5851 25.7084 80.3527 24.5535 80.8656 22.9683C81.3786 21.3795 81.6332 19.2941 81.6332 16.7086V16.6644C81.6332 14.123 81.3749 12.0708 80.8546 10.5113C80.3342 8.95191 79.5629 7.81544 78.5407 7.09457C77.5185 6.37738 76.249 6.01695 74.7359 6.01695H72.7911V27.5032H74.7359Z"
                fill="white"
              />
              <path
                d="M104.067 30.9199C102.502 29.7062 101.321 27.915 100.521 25.5428C99.7198 23.1705 99.3213 20.254 99.3213 16.7931V16.7489C99.3213 13.2991 99.7198 10.3899 100.521 8.02131C101.321 5.65275 102.502 3.85058 104.067 2.62216C105.632 1.39375 107.543 0.779541 109.809 0.779541C112.086 0.779541 114.009 1.39007 115.574 2.61113C117.138 3.83219 118.319 5.63068 119.12 8.01027C119.921 10.3899 120.32 13.2991 120.32 16.7489V16.7931C120.32 20.254 119.921 23.1742 119.12 25.5538C118.319 27.9334 117.138 29.7245 115.574 30.9309C114.009 32.1372 112.09 32.7404 109.809 32.7404C107.543 32.7404 105.632 32.1336 104.067 30.9199ZM112.466 26.6425C113.186 25.8517 113.732 24.6417 114.098 23.0124C114.467 21.3831 114.647 19.3088 114.647 16.7968V16.7526C114.647 14.2406 114.463 12.1663 114.098 10.537C113.728 8.90768 113.186 7.69398 112.466 6.89587C111.747 6.09777 110.857 5.70056 109.806 5.70056C108.783 5.70056 107.905 6.09777 107.178 6.89587C106.451 7.69398 105.898 8.90768 105.525 10.537C105.148 12.1663 104.964 14.2406 104.964 16.7526V16.7968C104.964 19.3271 105.152 21.4015 105.525 23.0234C105.901 24.6491 106.447 25.8554 107.167 26.6425C107.887 27.4332 108.769 27.8267 109.806 27.8267C110.861 27.8267 111.747 27.4332 112.466 26.6425Z"
                fill="white"
              />
              <path
                d="M124.423 1.21362H139.882V6.02063H129.977V15.0719H139.015V19.7061H129.977V32.3139H124.423V1.21362Z"
                fill="white"
              />
              <path
                d="M151.928 1.21362H167.386V6.02063H157.482V15.0719H166.519V19.7061H157.482V32.3139H151.924V1.21362H151.928Z"
                fill="white"
              />
              <path
                d="M170.977 1.21362H176.535V32.3102H170.977V1.21362Z"
                fill="white"
              />
              <path
                d="M181.225 1.21362H190.392C192.426 1.21362 194.116 1.57406 195.463 2.29125C196.81 3.00843 197.828 4.06767 198.511 5.45791C199.194 6.85183 199.537 8.56205 199.537 10.5886V10.6327C199.537 12.6298 199.149 14.3842 198.382 15.8921C197.611 17.4 196.511 18.4924 195.083 19.1691L200.142 32.3139H194.197L189.765 20.2246C189.665 20.2246 189.555 20.2246 189.44 20.2246C189.326 20.2246 189.215 20.2246 189.115 20.2246H186.779V32.3139H181.222V1.21362H181.225ZM189.702 16.0392C191.116 16.0392 192.164 15.6236 192.85 14.7887C193.533 13.9575 193.876 12.6555 193.876 10.8865V10.8423C193.876 9.1027 193.525 7.81544 192.828 6.9732C192.127 6.13096 191.093 5.71168 189.724 5.71168H186.783V16.0355H189.702V16.0392Z"
                fill="white"
              />
              <path
                d="M203.497 1.21362H219V6.02063H209.054V14.2738H218.461V18.7976H209.054V27.5032H219V32.3102H203.497V1.21362Z"
                fill="white"
              />
            </svg>
          </Box>
          {data.map((item) => (
            <Box
              key={item.key}
              sx={{ display: "flex" }}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <Button color="inherit">
                <Typography sx={{ py: 3 }}>{item.head}</Typography>
              </Button>
            </Box>
          ))}
          <Button component={Link} variant="h2" to="/map">
            <MapOutlined />
          </Button>
        </Toolbar>
        {activeMenuItem && (
          <Box
            sx={{}}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMouseLeave}
            hidden={!activeMenuItem}
          >
            <Grid container columnSpacing={2}>
              {activeMenuItem?.links?.map((link) => (
                <Grid item xs={6}  key={link.key}>
                  <List >
                    <ListItem key={link.key} disablePadding >
                      <ListItemButton component={Link} to={link.href}>
                        <ListItemText
                          sx={{ textAlign: "center" }}
                          primary={link.title}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
