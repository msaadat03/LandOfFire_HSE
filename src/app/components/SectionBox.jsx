import { Box, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function SectionBox({
  title,
  color,
  alignment,
  boldness,
  font,
  padding,
}) {
  return (
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            position: "relative",
            p: padding ?? 7,
            mb: 2,
            mt: 2,
            background: color,
            width: "full",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            fontWeight={boldness}
            color="white"
            textAlign={alignment}
            gutterBottom
            fontFamily={font}
          >
            {title}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

SectionBox.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  alignment: PropTypes.string,
  boldness: PropTypes.string,
  font: PropTypes.string,
  padding: PropTypes.number,
};
